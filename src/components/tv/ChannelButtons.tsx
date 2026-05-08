import * as React from 'react'
import styles from '@/styles/tv.module.css'

interface ChannelButtonsProps {
	channels: { label: string }[]
	current: number
	onChange: (next: number) => void
}

export default function ChannelButtons({ channels, current, onChange }: ChannelButtonsProps) {
	return (
		<div className={styles.buttonPanel}>
			<span className={styles.vhfLabel}>VHF · CHANNEL SELECT</span>
			<div className={styles.buttonStack}>
				{channels.map((ch, i) => {
					const isActive = i === current
					return (
						<button
							key={i}
							type='button'
							onClick={() => onChange(i)}
							className={`${styles.chButton} ${isActive ? styles.chButtonActive : ''}`}
							aria-label={`Channel ${i + 1} — ${ch.label}`}
							aria-pressed={isActive}>
							<span
								className={`${styles.chLed} ${isActive ? styles.chLedOn : ''}`}
								aria-hidden='true'
							/>
							<span className={styles.chNumber}>{String(i + 1).padStart(2, '0')}</span>
							<span className={styles.chLabel}>{ch.label}</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
