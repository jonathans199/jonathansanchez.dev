import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { blogPosts } from './../../../data/blog'
import { FaClock, FaMedium, FaArrowLeft } from 'react-icons/fa'
import { GetStaticPaths, GetStaticProps } from 'next'

interface PostProps {
	post: {
		id: string
		slug: string
		title: string
		description: string
		date: string
		dateISO: string
		readTime: string
		tags: string[]
		mediumUrl: string
		content: string
	}
}

const BlogPost = ({ post }: PostProps) => {
	if (!post) return null

	return (
		<>
			<Head>
				<title>{post.title} | Jonathan Sanchez</title>
				<meta name='description' content={post.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='max-w-[800px] mx-auto pt-40 px-4 pb-20'>
				<Link
					href='/blog'
					className='inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 mb-8'>
					<FaArrowLeft size={12} /> Back to Blog
				</Link>

				<article>
					<header className='mb-10'>
						<div className='flex flex-wrap gap-2 mb-4'>
							{post.tags.map((tag: string) => (
								<span key={tag} className='text-xs px-2 py-1 rounded-full bg-[var(--bg-card)] text-[var(--text-muted)]'>
									{tag}
								</span>
							))}
						</div>
						<h1 className='text-3xl sm:text-5xl font-bold mb-4 leading-tight text-[var(--text-primary)]'>{post.title}</h1>
						<div className='flex items-center gap-4 text-[var(--text-muted)] text-sm'>
							<span>{post.date}</span>
							<span className='flex items-center gap-1'>
								<FaClock size={12} /> {post.readTime}
							</span>
							{post.mediumUrl && (
								<a
									href={post.mediumUrl}
									target='_blank'
									rel='noreferrer'
									className='flex items-center gap-1 hover:text-[var(--accent)] transition-colors duration-300'>
									<FaMedium size={14} /> Read on Medium
								</a>
							)}
						</div>
					</header>

					<div className='prose dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-code:text-[var(--code-text)] prose-code:bg-[var(--code-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-transparent prose-pre:border-0 prose-pre:p-0 prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-[var(--accent)]'>
						<ReactMarkdown
							components={{
								code({ className, children, ...props }: any) {
									const match = /language-(\w+)/.exec(className || '')
									const inline = !match && !className
									return !inline ? (
										<SyntaxHighlighter
											style={oneDark}
											language={match ? match[1] : 'text'}
											PreTag='div'
											customStyle={{
												margin: 0,
												borderRadius: '0.5rem',
												fontSize: '0.875rem',
											}}
										>
											{String(children).replace(/\n$/, '')}
										</SyntaxHighlighter>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									)
								},
							}}
						>
							{post.content}
						</ReactMarkdown>
					</div>
				</article>

				<div className='mt-16 pt-8 border-t border-[var(--border-color)]'>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300'>
						<FaArrowLeft size={12} /> Back to Blog
					</Link>
				</div>
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = blogPosts.map((post: any) => ({
		params: { slug: post.slug },
	}))
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = blogPosts.find((p: any) => p.slug === params?.slug)
	if (!post) {
		return { notFound: true }
	}
	return {
		props: {
			post: {
				id: post.id,
				slug: post.slug,
				title: post.title,
				description: post.description,
				date: post.date,
				dateISO: post.dateISO,
				readTime: post.readTime,
				tags: post.tags,
				mediumUrl: post.mediumUrl,
				content: post.content,
			},
		},
	}
}

export default BlogPost
