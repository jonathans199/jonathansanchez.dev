import * as React from 'react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import CRTFrame from '@/components/tv/CRTFrame'
import StaticNoise from '@/components/tv/StaticNoise'
import { channels } from '@/components/tv/channels'

const TRANSITION_MS = 550

export default function TVPage() {
	const [channel, setChannel] = React.useState(0)
	const [transitioning, setTransitioning] = React.useState(false)
	const [powered, setPowered] = React.useState(true)
	const pendingRef = React.useRef<number | null>(null)

	const togglePower = React.useCallback(() => {
		setPowered(p => !p)
	}, [])

	const changeChannel = React.useCallback(
		(next: number) => {
			// If the TV is off, any channel action flips it on and jumps directly
			if (!powered) {
				setPowered(true)
				setChannel(next)
				return
			}
			if (transitioning) return
			pendingRef.current = next
			setTransitioning(true)
			window.setTimeout(() => {
				if (pendingRef.current !== null) {
					setChannel(pendingRef.current)
					pendingRef.current = null
				}
			}, TRANSITION_MS * 0.45)
			window.setTimeout(() => setTransitioning(false), TRANSITION_MS)
		},
		[transitioning, powered]
	)

	// Keyboard: arrow keys + number keys + 'p' for power
	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
			if (e.key === 'p' || e.key === 'P') {
				e.preventDefault()
				togglePower()
				return
			}
			if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
				e.preventDefault()
				changeChannel((channel + 1) % channels.length)
			} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
				e.preventDefault()
				changeChannel((channel - 1 + channels.length) % channels.length)
			} else if (e.key >= '1' && e.key <= '9') {
				const n = parseInt(e.key, 10) - 1
				if (n < channels.length && n !== channel) changeChannel(n)
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [channel, changeChannel, togglePower])

	const Active = channels[channel].Component

	return (
		<>
			<Head>
				<title>SANCHEZ·VISION · Jonathan Sanchez Portfolio</title>
				<meta
					name='description'
					content='Tune in to SANCHEZ·VISION — an interactive CRT-TV portfolio for Jonathan Sanchez. Turn the dial to browse work, tech, contributions, and more.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<CRTFrame
				channels={channels}
				currentChannel={channel}
				onChannelChange={changeChannel}
				powered={powered}
				onPowerToggle={togglePower}>
				<AnimatePresence mode='wait'>
					<motion.div
						key={channel}
						initial={{ opacity: 0, scale: 1.02 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.98 }}
						transition={{ duration: 0.3 }}
						style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
						<Active />
					</motion.div>
				</AnimatePresence>
				<StaticNoise active={transitioning && powered} />
			</CRTFrame>
		</>
	)
}

TVPage.disableLayout = true
