import Head from 'next/head'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { community } from '@/../data/community'

const Community = () => {
	return (
		<>
			<Head>
				<title>Jonathan Sanchez - Community | Founder, Speaker & Local Tech Leader</title>
				<meta
					name='description'
					content='Founder of Syntax Summit and devDive, speaker at Tech Hub South Florida — building local developer communities through meetups, workshops, and talks.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='max-w-[1200px] mx-auto pt-40 px-4'>
				<div className='flex flex-col justify-center mb-8'>
					<h2 className='text-4xl sm:text-6xl font-bold inline border-b-4 mb-4 border-[var(--accent)] w-fit'>
						Community
					</h2>
					<p className='text-[var(--text-secondary)] mt-4 max-w-[700px]'>
						Beyond shipping code, I invest in the local developer ecosystem — founding meetups, running
						workshops, and speaking at community events.
					</p>
				</div>

				<div className='grid gap-12 my-12'>
					{community.map(item => (
						<article
							key={item.id}
							className='border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg p-6 sm:p-8'>
							<div className='flex flex-col md:flex-row gap-6'>
								{item.img && (
									<div className='md:w-1/3'>
										<img
											src={item.img}
											alt={`${item.name} - ${item.role}`}
											className='w-full h-auto rounded-md'
										/>
									</div>
								)}
								<div className={item.img ? 'md:w-2/3' : 'w-full'}>
									<div className='flex items-center gap-3 flex-wrap mb-2'>
										<h3 className='text-2xl sm:text-3xl font-bold text-[var(--text-heading)]'>
											{item.name}
										</h3>
										<span className='text-xs uppercase tracking-widest px-3 py-1 border border-[var(--accent)] text-[var(--accent)] rounded-full'>
											{item.role}
										</span>
									</div>
									{item.year && (
										<p className='text-sm text-[var(--text-muted)] mb-3'>{item.year}</p>
									)}
									<p className='text-[var(--text-secondary)] leading-relaxed mb-4'>
										{item.description}
									</p>
									{item.live && (
										<Link
											href={item.live}
											target='_blank'
											rel='noreferrer'
											className='inline-flex items-center text-[var(--accent)] hover:underline'>
											Visit site
											<HiArrowNarrowRight className='ml-2' />
										</Link>
									)}
								</div>
							</div>
							{item.video && (
								<div className='mt-6'>
									<iframe
										className='w-full aspect-video rounded-md'
										src={item.video}
										title={`${item.name} - ${item.role}`}
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
								</div>
							)}
						</article>
					))}
				</div>
			</section>
		</>
	)
}

export default Community
