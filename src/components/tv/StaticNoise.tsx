import * as React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/tv.module.css'

interface StaticNoiseProps {
	active: boolean
}

export default function StaticNoise({ active }: StaticNoiseProps) {
	if (!active) return null
	return (
		<>
			<motion.div
				className={styles.noise}
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.9, 0.9, 0.4, 0] }}
				transition={{ duration: 0.55, times: [0, 0.15, 0.55, 0.8, 1] }}
			/>
			<div className={styles.roll} />
		</>
	)
}
