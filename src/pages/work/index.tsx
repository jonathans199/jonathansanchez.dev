import Head from 'next/head'
import { WorkItem } from '../../components/WorkItem'
import { projects } from './../../../data/projects'

const Work = () => {
  return (
    <>
      <Head>
        <title>Jonathan Sanchez - Work Portfolio | Software Projects & Applications</title>
        <meta name='description' content='Explore Jonathan Sanchez&apos;s portfolio of software projects, applications, and development work across various technologies and industries.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='max-w-[1200px] mx-auto pt-40 px-4'>
        <section className='min-h-screen'>
          <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600 '>Work</h2>
          <div className='flex flex-col items-center my-8'>
            {projects.map(item => (
              <WorkItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default Work
