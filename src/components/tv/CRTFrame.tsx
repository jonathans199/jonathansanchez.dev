import * as React from 'react'
import Link from 'next/link'
import styles from '@/styles/tv.module.css'
import ChannelButtons from './ChannelButtons'
import PowerButton from './PowerButton'

interface CRTFrameProps {
	children: React.ReactNode
	channels: { label: string }[]
	currentChannel: number
	onChannelChange: (next: number) => void
	powered: boolean
	onPowerToggle: () => void
}

export default function CRTFrame({
	children,
	channels,
	currentChannel,
	onChannelChange,
	powered,
	onPowerToggle,
}: CRTFrameProps) {
	const clock = useClock()
	const channelLabel = channels[currentChannel]?.label ?? ''
	const channelCount = channels.length

	return (
		<div className={styles.stage}>
			<Link
				href='/'
				style={{
					position: 'absolute',
					top: 24,
					right: 24,
					zIndex: 20,
					fontFamily: 'Courier New, monospace',
					fontSize: 11,
					letterSpacing: '0.2em',
					color: 'rgba(125, 211, 252, 0.8)',
					textDecoration: 'none',
					padding: '8px 14px',
					border: '1px solid rgba(125, 211, 252, 0.3)',
					borderRadius: 4,
					backdropFilter: 'blur(8px)',
					background: 'rgba(15, 23, 42, 0.5)',
				}}>
				◀ EXIT TV
			</Link>
			<div className={styles.cabinet}>
				<div className={styles.screenWrap}>
					<div className={`${styles.screen} ${!powered ? styles.screenOff : ''}`}>
						{powered && (
							<>
								<div className={styles.hud}>
									<span className={styles.hudLive} />
									CH {String(currentChannel + 1).padStart(2, '0')} · {channelLabel} · {clock}
								</div>
								{children}
								<div className={styles.flicker} />
								<div className={styles.scanlines} />
							</>
						)}
					</div>
				</div>

				<div className={styles.controls}>
					<ChannelButtons
						channels={channels}
						current={currentChannel}
						onChange={onChannelChange}
					/>
					<div className={styles.grille} aria-hidden='true' />
					<PowerButton powered={powered} onToggle={onPowerToggle} />
				</div>

				<span className={styles.brand}>SANCHEZ·VISION</span>
				<span className={styles.powerLed} aria-hidden='true' />
			</div>
		</div>
	)
}

function useClock() {
	const [time, setTime] = React.useState('--:--')
	React.useEffect(() => {
		const tick = () => {
			const d = new Date()
			const h = d.getHours().toString().padStart(2, '0')
			const m = d.getMinutes().toString().padStart(2, '0')
			setTime(`${h}:${m}`)
		}
		tick()
		const id = setInterval(tick, 30_000)
		return () => clearInterval(id)
	}, [])
	return time
}
