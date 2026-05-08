import * as React from 'react'
import Link from 'next/link'
import styles from '@/styles/tv.module.css'
import { projects } from '@/../data/projects'
import { contributions } from '@/../data/contributions'
import { logos } from '@/../data/logos'
import { blogPosts } from '@/../data/blog'
import { FaGithub, FaLink, FaApple, FaYoutube, FaLinkedin } from 'react-icons/fa'

interface ChannelDef {
	label: string
	Component: React.ComponentType
}

// ---------- CH 01 — INTRO ----------
const HeroChannel: React.ComponentType = () => (
	<div className={styles.content}>
		<span className={styles.caption}>— Broadcasting Live from Miami —</span>
		<div
			style={{
				marginTop: 24,
				display: 'grid',
				gridTemplateColumns: 'minmax(180px, 280px) 1fr',
				gap: 36,
				alignItems: 'center',
				flex: 1,
			}}>
			<div
				style={{
					position: 'relative',
					aspectRatio: '3 / 4',
					borderRadius: 8,
					overflow: 'hidden',
					border: '2px solid rgba(125, 211, 252, 0.35)',
					boxShadow: '0 0 40px rgba(56, 189, 248, 0.25), inset 0 0 60px rgba(0, 0, 0, 0.4)',
					filter: 'saturate(0.9) contrast(1.05)',
				}}>
				<img
					src='/img/jonathan.jpeg'
					alt='Jonathan Sanchez'
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				{/* scanline tint on portrait */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						background:
							'repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,0.25) 3px, rgba(0,0,0,0.25) 3px)',
						mixBlendMode: 'multiply',
						pointerEvents: 'none',
					}}
				/>
			</div>
			<div>
				<h1 className={styles.h1}>Jonathan Sanchez</h1>
				<span className={styles.h2}>Software Architect · Builder · CTO</span>
				<p className={styles.body} style={{ marginTop: 14 }}>
					I don&apos;t just write code — I architect experiences. 12+ years of turning bold ideas
					into scalable products users love and businesses rely on.
				</p>
				<p
					className={styles.body}
					style={{ marginTop: 22, fontFamily: 'Courier New, monospace', fontSize: 13 }}>
					▶ Turn the dial on the right to change channels.
				</p>
			</div>
		</div>
	</div>
)

// ---------- CH 02 — WORK ----------
const WorkChannel: React.ComponentType = () => {
	const all = projects as any[]
	const [idx, setIdx] = React.useState(0)
	const prev = () => setIdx(i => (i - 1 + all.length) % all.length)
	const next = () => setIdx(i => (i + 1) % all.length)

	const p = all[idx]
	const chevronStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 42,
		height: 42,
		border: '1px solid rgba(125, 211, 252, 0.4)',
		background: 'rgba(56, 189, 248, 0.08)',
		borderRadius: 6,
		color: '#e0f2fe',
		fontSize: 20,
		fontFamily: 'inherit',
		cursor: 'pointer',
		transition: 'all 0.15s',
		boxShadow: '0 0 10px rgba(56, 189, 248, 0.15)',
	}

	// Adaptive dot sizing so the indicator row stays compact for larger counts
	const count = all.length
	const dotWidth = count <= 6 ? 22 : count <= 10 ? 14 : count <= 16 ? 10 : 8
	const dotGap = count <= 6 ? 8 : count <= 10 ? 6 : 4

	return (
		<div className={styles.content}>
			<span className={styles.caption}>
				CH 02 · Work Archive · {String(idx + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
			</span>
			<div
				style={{
					marginTop: 16,
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 24,
					alignItems: 'center',
					flex: 1,
					minHeight: 0,
				}}>
				<img
					src={p.img}
					alt={p.title}
					style={{
						width: '100%',
						aspectRatio: '4 / 3',
						objectFit: 'cover',
						borderRadius: 8,
						filter: 'saturate(1.1) contrast(1.05)',
						boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)',
					}}
				/>
				<div>
					<h2 className={styles.h1} style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', marginBottom: 10 }}>
						{p.title.split(' - ')[0]}
					</h2>
					<p className={styles.body} style={{ fontSize: 14 }}>
						{p.description}
					</p>
					<p
						style={{
							marginTop: 12,
							fontFamily: 'Courier New, monospace',
							fontSize: 12,
							color: '#7dd3fc',
							letterSpacing: '0.08em',
						}}>
						{p.tech}
					</p>
					{p.year && (
						<p
							style={{
								marginTop: 8,
								fontFamily: 'Courier New, monospace',
								fontSize: 11,
								color: '#38bdf8',
								letterSpacing: '0.2em',
							}}>
							{p.year}{p.category ? ` · ${p.category.toUpperCase()}` : ''}
						</p>
					)}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 18,
					marginTop: 18,
				}}>
				<button
					type='button'
					onClick={prev}
					aria-label='Previous project'
					style={chevronStyle}
					onMouseEnter={e => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)')}
					onMouseLeave={e => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)')}>
					◀
				</button>
				<div
					style={{
						display: 'flex',
						gap: dotGap,
						maxWidth: '60%',
						flexWrap: 'nowrap',
						overflow: 'hidden',
					}}>
					{all.map((_, i) => (
						<button
							key={i}
							type='button'
							onClick={() => setIdx(i)}
							aria-label={`Go to project ${i + 1}`}
							style={{
								width: dotWidth,
								height: 6,
								borderRadius: 3,
								background: i === idx ? '#38bdf8' : 'rgba(56, 189, 248, 0.25)',
								border: 'none',
								cursor: 'pointer',
								padding: 0,
								flexShrink: 0,
								transition: 'all 0.3s',
								boxShadow: i === idx ? '0 0 8px rgba(56, 189, 248, 0.6)' : 'none',
							}}
						/>
					))}
				</div>
				<button
					type='button'
					onClick={next}
					aria-label='Next project'
					style={chevronStyle}
					onMouseEnter={e => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)')}
					onMouseLeave={e => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)')}>
					▶
				</button>
			</div>
		</div>
	)
}

// ---------- CH 03 — TECH ----------
const TechChannel: React.ComponentType = () => {
	const shown = logos.slice(0, 18)
	return (
		<div className={styles.content}>
			<span className={styles.caption}>CH 03 · Transmission Stack</span>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
					gridAutoRows: '1fr',
					gap: 12,
					flex: 1,
					minHeight: 0,
					marginTop: 10,
				}}>
				{shown.map((logo, i) => (
					<div
						key={i}
						style={{
							background: 'rgba(56, 189, 248, 0.06)',
							border: '1px solid rgba(125, 211, 252, 0.25)',
							borderRadius: 8,
							padding: '14px 10px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 10,
							boxShadow: '0 0 18px rgba(56, 189, 248, 0.1), inset 0 0 20px rgba(56, 189, 248, 0.04)',
							minHeight: 0,
						}}>
						<img
							src={logo.url}
							alt={logo.name}
							style={{
								width: '55%',
								aspectRatio: '1 / 1',
								objectFit: 'contain',
								filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.55))',
								maxHeight: '70%',
							}}
						/>
						<span
							style={{
								fontSize: 'clamp(11px, 1.1vw, 14px)',
								fontWeight: 600,
								color: '#e0f2fe',
								textAlign: 'center',
								letterSpacing: '0.04em',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								width: '100%',
							}}>
							{logo.name}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

// ---------- CH 04 — CONTRIBUTIONS ----------
const ContributionsChannel: React.ComponentType = () => {
	const list = contributions.slice(0, 3)
	return (
		<div className={styles.content}>
			<span className={styles.caption}>CH 04 · Field Contributions</span>
			<h2 className={styles.h2} style={{ marginTop: 8 }}>Open Source &amp; Beyond</h2>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
				{list.map((c: any) => (
					<div
						key={c.id}
						style={{
							display: 'grid',
							gridTemplateColumns: '120px 1fr',
							gap: 18,
							padding: 14,
							border: '1px solid rgba(125, 211, 252, 0.25)',
							background: 'rgba(56, 189, 248, 0.05)',
							borderRadius: 8,
							boxShadow: '0 0 16px rgba(56, 189, 248, 0.08)',
							alignItems: 'center',
						}}>
						<img
							src={c.img}
							alt={c.title}
							style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 6 }}
						/>
						<div>
							<h3 style={{ fontSize: 19, fontWeight: 700, color: '#e0f2fe', marginBottom: 6, lineHeight: 1.2 }}>
								{c.title}
							</h3>
							<p style={{ fontSize: 14, color: '#bae6fd', lineHeight: 1.5 }}>
								{c.description}
							</p>
							<p style={{ marginTop: 8, fontFamily: 'Courier New, monospace', fontSize: 12, color: '#7dd3fc', letterSpacing: '0.1em' }}>
								{c.tech}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

// ---------- CH 05 — COMMUNITY ----------
const CommunityChannel: React.ComponentType = () => (
	<div className={styles.content}>
		<span className={styles.caption}>CH 05 · Public Access</span>
		<h2 className={styles.h2} style={{ marginTop: 8 }}>Community</h2>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ aspectRatio: '16 / 9', border: '1px solid rgba(125, 211, 252, 0.3)', borderRadius: 6, overflow: 'hidden', background: '#000' }}>
					<img
						src='/img/syntax-summit.png'
						alt='Syntax Summit'
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</div>
				<p className={styles.caption} style={{ marginTop: 8 }}>Syntax Summit · Founder</p>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ aspectRatio: '16 / 9', border: '1px solid rgba(125, 211, 252, 0.3)', borderRadius: 6, overflow: 'hidden' }}>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/dpK-SIfkunw'
						title='Tech Hub South Florida'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
						style={{ border: 0 }}
					/>
				</div>
				<p className={styles.caption} style={{ marginTop: 8 }}>Tech Hub · Speaker</p>
			</div>
		</div>
		<div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
			<Link href='/community' style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#7dd3fc', textDecoration: 'underline', letterSpacing: '0.1em' }}>
				▶ VIEW COMMUNITY
			</Link>
			<Link href='/tutorials' style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#7dd3fc', textDecoration: 'underline', letterSpacing: '0.1em' }}>
				▶ TUTORIALS
			</Link>
		</div>
	</div>
)

// ---------- CH 06 — BLOG ----------
const BlogChannel: React.ComponentType = () => {
	const posts = [...(blogPosts as any[])]
		.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
		.slice(0, 3)
	return (
		<div className={styles.content}>
			<span className={styles.caption}>CH 06 · Late Night Dispatches</span>
			<div
				style={{
					display: 'grid',
					gridAutoRows: '1fr',
					gap: 14,
					flex: 1,
					minHeight: 0,
					marginTop: 10,
				}}>
				{posts.map(p => (
					<Link
						key={p.id}
						href={`/blog/${p.slug}`}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							padding: 'clamp(14px, 1.8vw, 24px)',
							border: '1px solid rgba(125, 211, 252, 0.25)',
							background: 'rgba(56, 189, 248, 0.05)',
							borderRadius: 8,
							boxShadow: '0 0 18px rgba(56, 189, 248, 0.08), inset 0 0 24px rgba(56, 189, 248, 0.03)',
							minHeight: 0,
						}}>
						<p
							style={{
								fontFamily: 'Courier New, monospace',
								fontSize: 'clamp(11px, 1vw, 13px)',
								color: '#38bdf8',
								letterSpacing: '0.18em',
							}}>
							{p.date} · {p.readTime}
						</p>
						<h3
							style={{
								fontSize: 'clamp(18px, 2.2vw, 28px)',
								fontWeight: 800,
								color: '#e0f2fe',
								marginTop: 8,
								marginBottom: 8,
								lineHeight: 1.2,
								letterSpacing: '-0.01em',
							}}>
							{p.title}
						</h3>
						<p style={{ fontSize: 'clamp(13px, 1.3vw, 17px)', color: '#bae6fd', lineHeight: 1.5 }}>
							{p.description}
						</p>
					</Link>
				))}
			</div>
		</div>
	)
}

// ---------- CH 08 — OFF HOURS (HOBBIES) ----------
const HobbiesChannel: React.ComponentType = () => {
	const hobbies = [
		{
			icon: '🥁',
			title: 'Drummer',
			tagline: 'Where words fail, paradiddles speak.',
		},
		{
			icon: '🏐',
			title: 'Volleyball Dad',
			tagline: 'Bumping, setting, parenting — in that order.',
		},
		{
			icon: '🪵',
			title: 'Wood Working',
			tagline: 'Measure twice, cut once, swear three times.',
		},
		{
			icon: '⛵',
			title: 'Frustrated Boat Captain',
			tagline: 'The dream is big. The boat? Still hypothetical.',
		},
	]
	return (
		<div className={styles.content}>
			<span className={styles.caption}>CH 08 · Off Hours · When the Code Stops</span>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
					gridAutoRows: '1fr',
					gap: 16,
					flex: 1,
					minHeight: 0,
					marginTop: 10,
				}}>
				{hobbies.map(h => (
					<div
						key={h.title}
						style={{
							padding: 'clamp(18px, 2.2vw, 32px)',
							border: '1px solid rgba(125, 211, 252, 0.25)',
							background: 'rgba(56, 189, 248, 0.05)',
							borderRadius: 10,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							gap: 10,
							boxShadow: '0 0 28px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.04)',
							minHeight: 0,
						}}>
						<span style={{ fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 1 }} aria-hidden='true'>
							{h.icon}
						</span>
						<h3
							style={{
								fontSize: 'clamp(20px, 2.4vw, 30px)',
								fontWeight: 800,
								color: '#e0f2fe',
								marginTop: 4,
								lineHeight: 1.15,
								letterSpacing: '-0.01em',
							}}>
							{h.title}
						</h3>
						<p
							style={{
								fontSize: 'clamp(14px, 1.4vw, 18px)',
								color: '#bae6fd',
								lineHeight: 1.45,
								fontStyle: 'italic',
							}}>
							&ldquo;{h.tagline}&rdquo;
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

// ---------- CH 07 — CONTACT ----------
const ContactChannel: React.ComponentType = () => {
	const cardBase: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		gap: 12,
		padding: 'clamp(18px, 2.2vw, 32px)',
		border: '1px solid rgba(125, 211, 252, 0.3)',
		background: 'rgba(56, 189, 248, 0.05)',
		borderRadius: 10,
		color: '#bae6fd',
		boxShadow: '0 0 24px rgba(56, 189, 248, 0.08), inset 0 0 28px rgba(56, 189, 248, 0.04)',
		minHeight: 0,
		transition: 'all 0.2s',
	}
	const cardTitle: React.CSSProperties = {
		fontSize: 'clamp(20px, 2.4vw, 30px)',
		fontWeight: 800,
		color: '#e0f2fe',
		letterSpacing: '-0.01em',
		lineHeight: 1.1,
	}
	const cardSub: React.CSSProperties = {
		fontSize: 'clamp(12px, 1.1vw, 15px)',
		color: '#7dd3fc',
		fontFamily: 'Courier New, monospace',
		letterSpacing: '0.12em',
		textTransform: 'uppercase',
	}
	const iconSize = 'clamp(32px, 4vw, 52px)'

	return (
		<div className={styles.content}>
			<span className={styles.caption}>CH 07 · Test Pattern · Call the Station</span>
			<h2
				className={styles.h1}
				style={{ fontSize: 'clamp(28px, 3.8vw, 54px)', marginTop: 12, marginBottom: 6 }}>
				Let&apos;s build something
			</h2>
			<p className={styles.body} style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', marginBottom: 14 }}>
				Have a product idea, system to scale, or just want to talk shop? The signal is always open.
			</p>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
					gridAutoRows: '1fr',
					gap: 16,
					flex: 1,
					minHeight: 0,
				}}>
				<a
					href='https://www.linkedin.com/in/jonathansanchez199/'
					target='_blank'
					rel='noreferrer'
					style={cardBase}>
					<FaLinkedin style={{ width: iconSize, height: iconSize, color: '#7dd3fc' }} />
					<span style={cardTitle}>LinkedIn</span>
					<span style={cardSub}>▶ Connect</span>
				</a>
				<a
					href='https://github.com/jonathans199'
					target='_blank'
					rel='noreferrer'
					style={cardBase}>
					<FaGithub style={{ width: iconSize, height: iconSize, color: '#7dd3fc' }} />
					<span style={cardTitle}>GitHub</span>
					<span style={cardSub}>▶ Browse Code</span>
				</a>
				<a
					href='https://www.youtube.com/@jonsthewebguy'
					target='_blank'
					rel='noreferrer'
					style={cardBase}>
					<FaYoutube style={{ width: iconSize, height: iconSize, color: '#7dd3fc' }} />
					<span style={cardTitle}>YouTube</span>
					<span style={cardSub}>▶ Watch Tutorials</span>
				</a>
				<Link
					href='/#contact'
					style={{
						...cardBase,
						border: '1px solid rgba(125, 211, 252, 0.6)',
						background: 'rgba(56, 189, 248, 0.15)',
						boxShadow: '0 0 32px rgba(56, 189, 248, 0.25), inset 0 0 40px rgba(56, 189, 248, 0.08)',
						color: '#e0f2fe',
					}}>
					<span
						style={{
							width: iconSize,
							height: iconSize,
							borderRadius: '50%',
							background: 'radial-gradient(circle at 35% 30%, #ff9090 0%, #ef4444 45%, #7a0a0a 100%)',
							boxShadow: '0 0 14px #ef4444, 0 0 24px rgba(239, 68, 68, 0.55)',
							display: 'inline-block',
							animation: 'none',
						}}
						aria-hidden='true'
					/>
					<span style={{ ...cardTitle, color: '#e0f2fe' }}>Send a Signal</span>
					<span style={{ ...cardSub, color: '#e0f2fe' }}>▶ Open Contact Form</span>
				</Link>
			</div>
		</div>
	)
}

export const channels: ChannelDef[] = [
	{ label: 'INTRO', Component: HeroChannel },
	{ label: 'WORK', Component: WorkChannel },
	{ label: 'TECH', Component: TechChannel },
	{ label: 'CONTRIBUTIONS', Component: ContributionsChannel },
	{ label: 'COMMUNITY', Component: CommunityChannel },
	{ label: 'BLOG', Component: BlogChannel },
	{ label: 'CONTACT', Component: ContactChannel },
	{ label: 'OFF HOURS', Component: HobbiesChannel },
]
