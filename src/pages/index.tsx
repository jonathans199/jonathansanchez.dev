import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

import { WorkItem } from '@/components/WorkItem'
import { projects } from '@/../data/projects'
import { contributions } from '@/../data/contributions'
import { community } from '@/../data/community'

import Skills from '@/components/Skills'
import ContactForm from '@/components/ContactForm'

export default function Home() {
	return (
		<>
			<Head>
				<title>Jonathan Sanchez \ Expert Software Architect with a passion for creating innovative and scalable solutions</title>
				<meta name='description' content='Expert Software Architect with a passion for creating innovative and scalable solutions' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='max-w-[1200px] mx-auto px-4 h-full'>
				<section className='min-h-screen flex items-center pt-24 pb-12' id='top'>
					<div className='max-w-[1000px] mx-auto px-8 w-full'>
						<p className='text-2xl text-[var(--accent)]'>Hi, I&apos;m</p>
						<h1 className='text-4xl  sm:text-7xl font-bold text-[var(--text-heading)]'>Jonathan Sanchez</h1>

						<h2 className='text-2xl sm:text-5xl font-bold text-[var(--text-secondary)]'>
							<TypeAnimation
								sequence={[
									'I architect systems that scale 🏯',
									2000,
									'I ship products, not prototypes 🚀',
									2000,
									'I turn AI into real products ☁️',
									2000,
									'I lead eng teams that deliver �',
									2000,
									'I build from mobile to cloud 📲',
									2000,
									'I spike volleyballs on weekends 🏐',
									2000,
									'I keep the beat on the drums 🥁',
									2000,
								]}
								wrapper='div'
								cursor={true}
								repeat={Infinity}
							/>
						</h2>
						<p className='text-xl text-[var(--text-secondary)] py-4'>
							I don&apos;t just write code — I architect experiences. 12+ years of transforming bold ideas into scalable, high-impact products that users love and businesses rely on.
						</p>
						<Link href='/work'>
							<button className='primary-accent-bg text-white border-2 px-6 py-3 my-2 flex items-center'>
								view work
								<span className='hover:rotate-90 duration-300'>
									<HiArrowNarrowRight className='ml-4' />
								</span>
							</button>
						</Link>
					</div>
				</section>

				<div className='scroll' id='about' />
				<section className='min-h-screen py-20'>
					<div className='flex flex-col justify-center items-center'>
						<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
							<div className='sm:text-right pb-8'>
								<p className='text-4xl font-bold inline border-b-4 border-[var(--accent)]'>About</p>
							</div>
						</div>
						<div className='max-w-[900px] text-right w-full grid sm:grid-cols-2 gap-8 px-4'>
							<div>
								<p className='text-3xl font-bold mb-4'>
									<q>Launch Early, Iterate Fast</q>
								</p>
								<p>
									I lead engineering teams and architect systems built to ship fast and scale faster. From AI-powered products with LangChain and RAG to cloud-native platforms on AWS and GCP, I bring ideas to market with speed and precision — then iterate until they stick.
									<br />
									<br />
									<b>Specialties:</b> Systems Architecture, Team Leadership, AI/ML, Cloud Solutions, PIM &amp; E-commerce, TypeScript, React, React Native, Ruby on Rails, Node.js, Next.js, and Mobile Development.
								</p>
							</div>
							<img src='/img/jonathan.jpeg' alt='' />
						</div>
					</div>
				</section>

				<section className='min-h-full bottom-margin-large' id='work'>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 text-[var(--text-primary)] border-[var(--accent)]'>Work</h2>
						<p>checkout some of my work </p>
					</div>
					<section className='max-w-[1200px] mx-auto'>
						{projects?.slice(0, 5).map(item => (
							<WorkItem key={item.id} item={item} />
						))}
					</section>
					<Link href='/work'>
						<button className='primary-accent-bg text-white border-2 px-6 py-3 my-2 flex items-center'>
							View More work
							<span className='hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-4' />
							</span>
						</button>
					</Link>
				</section>
				<div className='scroll' id='skills' />
				<Skills />
				<div className='scroll' id='contributions' />
				<div>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 text-[var(--text-primary)] border-[var(--accent)]'>Contributions</h2>
						<p>checkout some of my work </p>
					</div>
					<section className='max-w-[1200px] mx-auto'>
						{contributions.slice(0, 3).map(item => (
							<WorkItem key={item.id} item={item} />
						))}
					</section>
					{/* <Link href='/work'>
						<button className='primary-accent-bg text-white border-2 px-6 py-3 my-2 flex items-center'>
							View More work
							<span className='hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-4' />
							</span>
						</button>
					</Link> */}
				</div>

				<div className='scroll' id='community' />
				<div className='py-12'>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 text-[var(--text-primary)] border-[var(--accent)] w-fit'>
							Community
						</h2>
						<p className='mt-2 text-[var(--text-secondary)]'>
							building the local dev ecosystem — meetups, workshops & talks
						</p>
					</div>
					<section className='max-w-[1200px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
						{community.map(item => (
							<div
								key={item.id}
								className='border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg p-6 flex flex-col'>
								{item.img ? (
									<img
										src={item.img}
										alt={`${item.name} - ${item.role}`}
										className='w-full h-40 object-cover rounded-md mb-4'
									/>
								) : (
									<div className='w-full h-40 rounded-md mb-4 bg-[var(--bg-card-hover)] flex items-center justify-center'>
										<span className='text-3xl font-bold text-[var(--accent)] tracking-widest'>
											{item.name}
										</span>
									</div>
								)}
								<div className='flex items-center gap-2 flex-wrap mb-2'>
									<h3 className='text-xl font-bold text-[var(--text-heading)]'>{item.name}</h3>
									<span className='text-[10px] uppercase tracking-widest px-2 py-0.5 border border-[var(--accent)] text-[var(--accent)] rounded-full'>
										{item.role}
									</span>
								</div>
								<p className='text-sm text-[var(--text-secondary)] flex-1'>{item.description}</p>
							</div>
						))}
					</section>
					<Link href='/community'>
						<button className='primary-accent-bg text-white border-2 px-6 py-3 my-6 flex items-center'>
							View Community
							<span className='hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-4' />
							</span>
						</button>
					</Link>
				</div>

				<div id='contact' className='w-full flex justify-center items-center p-4 py-20'>
					<ContactForm />
				</div>
			</div>
		</>
	)
}
