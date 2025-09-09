import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

import { Navbar } from '@/layout/Navbar/Navbar'
import { WorkItem } from '@/components/WorkItem'
import { projects } from '@/../data/projects'
import { contributions } from '@/../data/contributions'

import TechIcon from '@/components/TechIcon'

export default function Home() {
	return (
		<>
			<Head>
				<title>Jonathan Sanchez \ Expert Software Architect with a passion for creating innovative and scalable solutions'</title>
				<meta name='description' content='Expert Software Architect with a passion for creating innovative and scalable solutions' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='max-w-[1200px] mx-auto px-4 h-full'>
				<section className='h-screen ' id='top'>
					<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
						<p className='text-2xl text-red-600'>Hi 👋, my name is</p>
						<h1 className='text-4xl  sm:text-7xl font-bold text-[#ccd6f6]'>Jonathan Sanchez</h1>

						<h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
							<TypeAnimation
								sequence={[
									'Software Architect 🏯',
									2000,
									'Hands-on CTO 🚀',
									2000,
									'Mobile Software Engineer 📱',
									2000,
									'Full-Stack Software Engineer 👨‍💻',
									2000,
									'Experienced Ecommerce and PIM Professional 🛍️',
									2000,
									'Volleyball Player 🏐',
									2000,
									'Drummer 🥁',
									2000,
								]}
								wrapper='div'
								cursor={true}
								repeat={Infinity}
							/>
						</h2>
						<p className='text-xl text-[#8892b0] py-4'>
						🚀 Software Engineer and Software Architect with 11 years of experience turning complex challenges into simple, impactful solutions. I’ve helped companies grow by building products that delight users, scale with demand, and make a real difference in how people work and live. Passionate about blending creativity with problem-solving to deliver results that last. 💡 I'm also a software architect who's skilled in designing and implementing scalable, maintainable, and high-performing software systems.
						</p>
						<Link href='/work'>
							<button className='primary-rd-bg text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
								view work
								<span className='hover:rotate-90 duration-300'>
									<HiArrowNarrowRight className='ml-4' />
								</span>
							</button>
						</Link>
					</div>
				</section>

				<div className='scroll' id='about' />
				<section className='h-screen min'>
					<div className='flex flex-col justify-center items-center'>
						<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
							<div className='sm:text-right pb-8'>
								<p className='text-4xl font-bold inline border-b-4 border-red-600'>About</p>
							</div>
						</div>
						<div className='max-w-[1200px] text-right w-full grid sm:grid-cols-2 gap-8 px-4'>
							<div>
								<p className='text-3xl font-bold'>
									<q>Ready Fire, Aim</q>
								</p>
								<p>
									As a software engineer, I am committed to creating elegant, reliable, and practical software
									solutions. With a strong technical background and a focus on scalability and robustness, I bring a
									unique perspective to my work that ensures dependable and high-performing systems. <br />
									<br />
									I&lsquo;m a self-starter with a passion for delivering exceptional products that exceed expectations.
									I thrive on discovering innovative ways to enhance the user experience, whether through refining
									design elements or devising clever solutions to challenging problems.
									<br />
									<br />
									Specialties: Typescript, Javascript, React, React Native, Node.js, Next.js, Mongo, AWS, CSS, HTML,
									Tailwind, Sass, AWS and more
								</p>
							</div>
							<img src='/img/jonathan.jpeg' alt='' />
						</div>
					</div>
				</section>

				<section className='min-h-full bottom-margin-large' id='work'>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</h2>
						<p>checkout some of my work </p>
					</div>
					<section className='max-w-[1200px] mx-auto'>
						{projects?.slice(0, 5).map(item => (
							<WorkItem key={item.id} item={item} />
						))}
					</section>
					<Link href='/work'>
						<button className='primary-rd-bg text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
							View More work
							<span className='hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-4' />
							</span>
						</button>
					</Link>
				</section>
				<div className='scroll' id='skills' />
				<section className='bottom-margin-large'>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 mb-4 border-red-600'>Skills</h2>
					</div>
					<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 text-center my-8'>
						<TechIcon name='JavaScript' />
						<TechIcon name='TypeScript' />
						<TechIcon name='React' />
						<TechIcon name='React Native' />
						<TechIcon name='Node' />
						<TechIcon name='Next.js' />
						<TechIcon name='HTML' />
						<TechIcon name='CSS' />
						<TechIcon name='Sass' />
						<TechIcon name='Tailwind' />
						<TechIcon name='MongoDB' />
						<TechIcon name='Express' />
						<TechIcon name='AWS' />
						<TechIcon name='GCP' />
						<TechIcon name='Firebase' />
						<TechIcon name='Supabase' />
						<TechIcon name='Ruby' />
						<TechIcon name='Ruby on Rails' />
						<TechIcon name='Shopify' />
						<TechIcon name='Bootstrap' />
						<TechIcon name='Expo' />
					</div>
				</section>
				{/* <div className='min-h-full bottom-margin-large'></div> */}
				<div className='scroll' id='contributions' />
				<div>
					<div className='flex flex-col justify-center'>
						<h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Contributions</h2>
						<p>checkout some of my work </p>
					</div>
					<section className='max-w-[1200px] mx-auto'>
						{contributions.slice(0, 3).map(item => (
							<WorkItem key={item.id} item={item} />
						))}
					</section>
					{/* <Link href='/work'>
						<button className='primary-rd-bg text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
							View More work
							<span className='hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-4' />
							</span>
						</button>
					</Link> */}
				</div>

				<div id='contact' className='w-full h-screen flex justify-center items-center p-4'>
					<div className='h-screen '>
						<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
							<h2 className='text-4xl font-bold inline border-b-4 border-red-600 mb-4'>Contact</h2>
							<p className='text-xl text-[#8892b0] py-4 max-w-[700px]'>
								Feel free to reach out and let's collaborate on your project. We can make a difference together!
							</p>
						</div>
					</div>

					{/* <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div
              className='pb-8
            '>
              <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'> Contact</p>
              <p>
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque laudantium in beatae officia sequi
                esse accusantium amet ipsum alias nulla, voluptas, asperiores nam molestiae nostrum neque. Iure,
                voluptatibus. Ducimus!
              </p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name='' id='' cols='30' rows='10'></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3'>
              Lets Collaborate
            </button>
          </form> */}
				</div>
			</div>
		</>
	)
}
