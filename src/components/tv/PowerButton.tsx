import * as React from 'react'
import styles from '@/styles/tv.module.css'

interface PowerButtonProps {
	powered: boolean
	onToggle: () => void
}

export default function PowerButton({ powered, onToggle }: PowerButtonProps) {
	return (
		<div className={styles.powerWrap}>
			<button
				type='button'
				onClick={onToggle}
				className={`${styles.powerButton} ${powered ? styles.powerButtonOn : ''}`}
				aria-label={powered ? 'Turn TV off' : 'Turn TV on'}
				aria-pressed={powered}>
				<span
					className={`${styles.powerLedIndicator} ${powered ? styles.powerLedIndicatorOn : ''}`}
					aria-hidden='true'
				/>
				<span className={styles.powerLabel}>POWER</span>
				<span className={styles.powerGlyph} aria-hidden='true'>
					⏻
				</span>
			</button>
		</div>
	)
}
