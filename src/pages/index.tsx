import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/layout/Navbar/Navbar'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TypeAnimation } from 'react-type-animation'

import Icon from './../components/icons/index'
import Javascript from './../components/icons/Javascript'
import ReactIcon from './../components/icons/React'
import Node from './../components/icons/Node'
import Html from './../components/icons/Html'
import MongoDb from './../components/icons/MongoDb'
import Nextjs from './../components/icons/Next'
import Sass from './../components/icons/Sass'
import Tailwind from './../components/icons/Tailwind'
import Css from './../components/icons/Css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Sanchez \ Dev</title>
        <meta name='description' content='Welcome to my portfolio site build with React in Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='max-w-[1200px] mx-auto px-4'>
        <section className='h-screen ' id='top'>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-red-600'>Hola, my name is</p>
            <h1 className='text-4xl  sm:text-7xl font-bold text-[#ccd6f6]'>Jonathan Sanchez</h1>

            <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer 👨‍💻',
                  2000,
                  'Girl Dad 👯‍♀️',
                  2000,
                  'Drummer 🥁',
                  2000,
                  'Instructor 👨‍🏫',
                  2000,
                  'Dog Lover 🐶',
                  2000,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                // style={{ fontSize: '2em' }}
              />
            </h2>
            <p className='text-xl text-[#8892b0] py-4 max-w-[700px]'>
              I&lsquo;m a full-stack and mobile developer based out of the sunshine state 😎 Florida. &nbsp; I&lsquo;m
              passionate about building modern software solutions with beautiful & functional UI/UX.
            </p>
            <div>
              <button className='primary-rd-bg text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
                view work
                <span className='hover:rotate-90 duration-300' id='about'>
                  <HiArrowNarrowRight className='ml-4' />
                </span>
              </button>
            </div>
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
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <p className='sm:text-right text-3xl font-bold'>I&lsquo;m Jonathan, but you could call me Jon</p>
              <p>
                As a software engineer passionate about good design and UX, I am committed to creating elegant and
                user-friendly software solutions that meet the needs of users. I have a strong background in both
                technical and soft skills, and I bring a unique perspective to my work that emphasizes the importance of
                aesthetics and usability. <br />
                <br /> I am self-motivated and driven by a desire to deliver high-quality products that not only meet
                but exceed user expectations. Whether it&lsquo;s through iterative design processes or creative problem
                solving, I am always seeking new and innovative ways to improve the user experience.
                <br />
                <br />
                Specialties: Typescript, Javascript, React, React Native, Node.js, Next.js, Mongo, AWS, CSS, HTML
              </p>
            </div>
          </div>
        </section>

        <div className='scroll' id='skills' />
        <section className='h-screen min-h-screen'>
          <div className='flex flex-col  justify-center'>
            <h2 className='text-4xl font-bold inline border-b-4 mb-4 border-red-600'>Skills</h2>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-20 text-center my-8'>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Javascript} title='Javascript' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={ReactIcon} title='React' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Css} title='Css' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Nextjs} title='Next.js' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Html} title='Html' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Sass} title='Sass' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Node} title='Node' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={MongoDb} title='MongoDb' />
            </div>
            <div className='shadow-md shawdow-[#040c16] hover:scale-110 duration500'>
              <Icon IconType={Tailwind} title='Tailwind' />
            </div>
          </div>
        </section>

        {/* <div className='scroll' id='work' />
        <div className='h-screen'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</h2>
            <p>checkout some of my work </p>
          </div>
          <div className='gap-4'> */}
        {/* <section>
              <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
                  <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
                    <img
                      alt='Party'
                      src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      className='absolute inset-0 h-full w-full object-cover'
                    />
                  </div>

                  <div className='lg:py-24'>
                    <h2 className='text-3xl font-bold sm:text-4xl'>Grow your audience</h2>

                    <p className='mt-4 text-gray-400'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos
                      ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                      repellat.
                    </p>

                    <a
                      href='#'
                      className='mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-indigo-500'>
                      <span className='text-sm font-medium'> Get Started </span>

                      <svg
                        className='ml-3 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
                  <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full'>
                    <img
                      alt='Party'
                      src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      className='absolute inset-0 h-full w-full object-cover'
                    />
                  </div>

                  <div className='lg:py-24'>
                    <h2 className='text-3xl font-bold sm:text-4xl'>Grow your audience</h2>

                    <p className='mt-4 text-gray-400'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos
                      ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                      repellat.
                    </p>

                    <a
                      href='#'
                      className='mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-indigo-500'>
                      <span className='text-sm font-medium'> Get Started </span>

                      <svg
                        className='ml-3 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section> */}

        {/* </div>
        </div> */}

        <div id='contact' className='w-full h-screen flex justify-center items-center p-4'>
          <div className='h-screen '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <h2 className='text-4xl font-bold inline border-b-4 border-red-600 mb-4'>Contact</h2>
              <p className='text-xl text-[#8892b0] py-4 max-w-[700px]'>
                Lets collaborate on your project and change the world one screen at a time..... 🌎
              </p>

              <a href='mailto:jonathans199@gmail.com'>
                <h2 className='text-2xl sm:text-2xl font-bold text-[#8892b0]'>jonathans199@gmail.com</h2>
              </a>
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
