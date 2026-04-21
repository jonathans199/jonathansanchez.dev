import Head from 'next/head'
import Link from 'next/link'
import { blogPosts } from './../../../data/blog'
import { FaClock } from 'react-icons/fa'

function getFirstImage(content: string): string | null {
	const match = content.match(/!\[.*?\]\((\/[^)]+)\)/)
	return match ? match[1] : null
}

const BlogCard = ({ item }: any) => {
	const thumbnail = getFirstImage(item.content)

	return (
		<Link href={`/blog/${item.slug}`} className='block group'>
			<div className='flex flex-col sm:flex-row rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20 overflow-hidden'>
				{thumbnail && (
					<div className='sm:w-56 sm:min-w-[14rem] h-44 sm:h-auto shrink-0'>
						<img
							src={thumbnail}
							alt={item.title}
							className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
						/>
					</div>
				)}
				<div className='p-6 flex flex-col justify-center'>
					<div className='flex flex-wrap gap-2 mb-3'>
						{item.tags.map((tag: string) => (
							<span key={tag} className='text-xs px-2 py-1 rounded-full bg-[var(--bg-card-hover)] text-[var(--text-muted)]'>
								{tag}
							</span>
						))}
					</div>
					<h3 className='text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300'>
						{item.title}
					</h3>
					<p className='text-[var(--text-secondary)] mb-4 text-sm leading-relaxed line-clamp-2'>{item.description}</p>
					<div className='flex items-center text-[var(--text-muted)] text-xs gap-4'>
						<span>{item.date}</span>
						<span className='flex items-center gap-1'>
							<FaClock size={10} /> {item.readTime}
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

const Blog = () => {
	const sortedPosts = [...blogPosts].sort(
		(a: any, b: any) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
	)

	return (
		<>
			<Head>
				<title>Jonathan Sanchez - Blog | Technical Articles & Tutorials</title>
				<meta
					name='description'
					content='Technical blog by Jonathan Sanchez covering Node.js, AWS, React, TypeScript, DevOps, and web development best practices.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='max-w-[900px] mx-auto pt-40 px-4'>
				<section className='min-h-screen'>
					<div className='mb-12'>
						<h2 className='text-4xl sm:text-6xl font-bold inline border-b-4 mb-4 border-[var(--accent)] text-[var(--text-primary)]'>Blog</h2>
						<p className='text-[var(--text-secondary)] mt-6 max-w-2xl'>
							Technical articles and tutorials on web development, cloud infrastructure, and software engineering.
						</p>
					</div>
					<div className='grid gap-4'>
						{sortedPosts.map((item: any) => (
							<BlogCard key={item.id} item={item} />
						))}
					</div>
				</section>
			</section>
		</>
	)
}

export default Blog
