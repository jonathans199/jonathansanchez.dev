import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaMedium, FaChevronDown, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'

export const Navbar = () => {
	const [nav, setNav] = React.useState(false)
	const [moreOpen, setMoreOpen] = React.useState(false)
	const moreRef = React.useRef<HTMLDivElement>(null)
	const { theme, toggleTheme } = useTheme()

	const handleMenuToggle = () => setNav(!nav)

	// Close dropdown when clicking outside
	React.useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
				setMoreOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const desktopLinkClass =
		'text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 font-medium tracking-wide'

	return (
		<div className='fixed w-full flex justify-between items-center px-6 py-3 bg-[var(--bg-nav)] backdrop-blur-sm text-[var(--text-primary)] z-50 border-b border-[var(--border-color)] transition-colors duration-300'>
			{/* Logo */}
			<Link href='/' className='hover:cursor-pointer hover:scale-105 duration-500 flex items-center shrink-0'>
				<Image
					className='bg-slate-200 rounded-full'
					src='/jons-logo.png'
					alt='jonathanSanchez.dev'
					width={40}
					height={30}
					priority
				/>
				<h2 className='ml-1 text-[var(--text-muted)] text-xl tracking-widest font-medium'>.JS</h2>
			</Link>

			{/* Desktop Nav Links */}
			<nav className='hidden lg:flex items-center gap-8'>
				<Link href='/' className={desktopLinkClass}>
					Home
				</Link>
				<Link href='/#about' className={desktopLinkClass}>
					About
				</Link>
				<Link href='/projects' className={desktopLinkClass}>
					Projects
				</Link>
				<Link href='/blog' className={desktopLinkClass}>
					Blog
				</Link>

				{/* More Dropdown */}
				<div ref={moreRef} className='relative'>
					<button
						onClick={() => setMoreOpen(!moreOpen)}
						className={`${desktopLinkClass} flex items-center gap-1 cursor-pointer`}>
						More <FaChevronDown size={10} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
					</button>
					{moreOpen && (
						<div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg py-2 min-w-[180px] shadow-xl'>
							<Link
								href='/work'
								onClick={() => setMoreOpen(false)}
								className='block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200'>
								Work
							</Link>
							<Link
								href='/tutorials'
								onClick={() => setMoreOpen(false)}
								className='block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200'>
								Tutorials
							</Link>
							<Link
								href='/packages'
								onClick={() => setMoreOpen(false)}
								className='block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200'>
								Packages
							</Link>
							<Link
								href='/contributions'
								onClick={() => setMoreOpen(false)}
								className='block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200'>
								Contributions
							</Link>
							<Link
								href='/community'
								onClick={() => setMoreOpen(false)}
								className='block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200'>
								Community
							</Link>
						</div>
					)}
				</div>

				<Link href='/#contact' className={desktopLinkClass}>
					Contact
				</Link>
			</nav>

			{/* Desktop Right: Social Icons + Theme Toggle */}
			<div className='hidden lg:flex items-center gap-3'>
				<a href='https://www.linkedin.com/in/jonathansanchez199/' target='_blank' rel='noreferrer'
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300'>
					<FaLinkedin size={18} />
				</a>
				<a href='https://github.com/jonathans199' target='_blank' rel='noreferrer'
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300'>
					<FaGithub size={18} />
				</a>
				<a href='https://www.youtube.com/@jonsthewebguy' target='_blank' rel='noreferrer'
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300'>
					<FaYoutube size={18} />
				</a>
				<a href='https://medium.com/@jonathans199' target='_blank' rel='noreferrer'
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300'>
					<FaMedium size={18} />
				</a>
				<div className='w-px h-4 bg-[var(--border-color)] mx-1' />
				<button
					onClick={toggleTheme}
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 cursor-pointer p-1'
					aria-label='Toggle theme'>
					{theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
				</button>
			</div>

			{/* Mobile: Theme Toggle + Hamburger */}
			<div className='lg:hidden flex items-center gap-4 z-10'>
				<button
					onClick={toggleTheme}
					className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 cursor-pointer'
					aria-label='Toggle theme'>
					{theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
				</button>
				<div onClick={handleMenuToggle} className='cursor-pointer'>
					{!nav ? (
						<FaBars size={22} className='text-[var(--text-muted)] hover:text-[var(--accent)] hover:scale-110 duration-500' />
					) : (
						<FaTimes size={20} className='text-[var(--text-primary)] hover:text-[var(--accent)] duration-300' />
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={
					!nav
						? 'hidden'
						: 'lg:hidden absolute top-0 left-0 w-full h-screen bg-[var(--bg-primary)] flex flex-col items-center pt-24'
				}>
				<ul>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/' onClick={() => setNav(false)}>HOME</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/#about' onClick={() => setNav(false)}>ABOUT</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/#skills' onClick={() => setNav(false)}>SKILLS</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/work' onClick={() => setNav(false)}>WORK</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/projects' onClick={() => setNav(false)}>PROJECTS</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/blog' onClick={() => setNav(false)}>BLOG</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/tutorials' onClick={() => setNav(false)}>TUTORIALS</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/packages' onClick={() => setNav(false)}>PACKAGES</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/contributions' onClick={() => setNav(false)}>CONTRIBUTIONS</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/community' onClick={() => setNav(false)}>COMMUNITY</Link>
					</li>
					<li className='py-4 text-3xl hover:text-[var(--accent)] hover:ml-[-10px] duration-300'>
						<Link href='/#contact' onClick={() => setNav(false)}>CONTACT</Link>
					</li>
				</ul>

				{/* Mobile Social Icons */}
				<div className='flex gap-6 mt-8'>
					<a href='https://www.linkedin.com/in/jonathansanchez199/' target='_blank' rel='noreferrer'
						className='text-[var(--text-muted)] hover:text-[var(--accent)]'>
						<FaLinkedin size={24} />
					</a>
					<a href='https://github.com/jonathans199' target='_blank' rel='noreferrer'
						className='text-[var(--text-muted)] hover:text-[var(--accent)]'>
						<FaGithub size={24} />
					</a>
					<a href='https://www.youtube.com/@jonsthewebguy' target='_blank' rel='noreferrer'
						className='text-[var(--text-muted)] hover:text-[var(--accent)]'>
						<FaYoutube size={24} />
					</a>
					<a href='https://medium.com/@jonathans199' target='_blank' rel='noreferrer'
						className='text-[var(--text-muted)] hover:text-[var(--accent)]'>
						<FaMedium size={24} />
					</a>
				</div>
			</div>
		</div>
	)
}
