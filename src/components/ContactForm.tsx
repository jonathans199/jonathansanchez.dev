import * as React from 'react'

declare global {
	interface Window {
		turnstile?: {
			render: (container: HTMLElement, options: Record<string, unknown>) => string
			reset: (widgetId: string) => void
		}
	}
}

export default function ContactForm() {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: '',
	})
	const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [errorMessage, setErrorMessage] = React.useState('')
	const [turnstileToken, setTurnstileToken] = React.useState('')
	const turnstileRef = React.useRef<HTMLDivElement>(null)
	const widgetIdRef = React.useRef<string | null>(null)
	const [honeypot, setHoneypot] = React.useState('')

	React.useEffect(() => {
		const siteKey = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY
		if (!siteKey) return

		const renderWidget = () => {
			if (turnstileRef.current && window.turnstile && !widgetIdRef.current) {
				widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
					sitekey: siteKey,
					theme: 'dark',
					callback: (token: string) => setTurnstileToken(token),
					'expired-callback': () => setTurnstileToken(''),
				})
			}
		}

		if (window.turnstile) {
			renderWidget()
			return
		}

		const script = document.createElement('script')
		script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
		script.async = true
		script.onload = renderWidget
		document.head.appendChild(script)

		return () => {
			if (script.parentNode) script.parentNode.removeChild(script)
		}
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setStatus('loading')
		setErrorMessage('')

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					website: honeypot,
					'cf-turnstile-response': turnstileToken,
				}),
			})

			if (response.ok) {
				setStatus('success')
				setFormData({ name: '', email: '', message: '' })
				setTurnstileToken('')
				if (widgetIdRef.current && window.turnstile) {
					window.turnstile.reset(widgetIdRef.current)
				}
			} else {
				const data = await response.json()
				setStatus('error')
				setErrorMessage(data.error || 'Failed to send message')
			}
		} catch (error) {
			setStatus('error')
			setErrorMessage('Failed to send message. Please try again.')
		}
	}

	const isSubmitDisabled = status === 'loading' || !turnstileToken

	return (
		<form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline border-b-4 border-[var(--accent)] text-[var(--text-primary)]'>Contact</p>
				<p className='text-[var(--text-secondary)] py-4'>
					Submit the form below
				</p>
			</div>

			{status === 'success' && (
				<div className='p-4 mb-4 bg-green-900 text-green-200 rounded'>
					Message sent successfully! I&apos;ll get back to you soon.
				</div>
			)}

			{status === 'error' && (
				<div className='p-4 mb-4 bg-red-900 text-red-200 rounded'>
					{errorMessage}
				</div>
			)}

			<input
				className='p-2 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors'
				type='text'
				placeholder='Name'
				name='name'
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<input
				className='my-4 p-2 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors'
				type='email'
				placeholder='Email'
				name='email'
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<textarea
				className='p-2 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors'
				name='message'
				placeholder='Message'
				rows={10}
				value={formData.message}
				onChange={handleChange}
				required
			/>

			{/* Honeypot field - hidden from real users */}
			<div style={{ position: 'absolute', left: '-9999px' }} aria-hidden='true'>
				<input
					type='text'
					name='website'
					tabIndex={-1}
					autoComplete='off'
					value={honeypot}
					onChange={(e) => setHoneypot(e.target.value)}
				/>
			</div>

			<div ref={turnstileRef} className='my-4 mx-auto' />

			<button
				type='submit'
				disabled={isSubmitDisabled}
				className='text-white border-2 bg-brand-600 border-brand-600 hover:bg-brand-700 hover:border-brand-700 px-4 py-3 my-4 mx-auto flex items-center rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
				{status === 'loading' ? 'Sending...' : "Let's Collaborate"}
			</button>
		</form>
	)
}
