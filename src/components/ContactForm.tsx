import * as React from 'react'

export default function ContactForm() {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: '',
	})
	const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [errorMessage, setErrorMessage] = React.useState('')

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
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setStatus('success')
				setFormData({ name: '', email: '', message: '' })
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

	return (
		<form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
				<p className='text-[#8892b0] py-4'>
					Submit the form below or send me an email - jonathans199@gmail.com
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
				className='p-2 bg-[#ccd6f6] text-gray-900'
				type='text'
				placeholder='Name'
				name='name'
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<input
				className='my-4 p-2 bg-[#ccd6f6] text-gray-900'
				type='email'
				placeholder='Email'
				name='email'
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<textarea
				className='p-2 bg-[#ccd6f6] text-gray-900'
				name='message'
				placeholder='Message'
				rows={10}
				value={formData.message}
				onChange={handleChange}
				required
			/>
			<button
				type='submit'
				disabled={status === 'loading'}
				className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-50 disabled:cursor-not-allowed'>
				{status === 'loading' ? 'Sending...' : "Let's Collaborate"}
			</button>
		</form>
	)
}
