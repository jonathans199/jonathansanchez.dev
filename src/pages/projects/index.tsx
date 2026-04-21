import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLink, FaApple } from 'react-icons/fa'
import { projects } from '../../../data/projects'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Jonathan Sanchez Portfolio</title>
        <meta name='description' content='Browse all projects and applications developed by Jonathan Sanchez, including mobile apps, web applications, and software solutions.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[1200px] mx-auto pt-40 px-4 pb-20'>
        <section className='min-h-screen'>
          <div className='mb-12'>
            <h1 className='text-6xl font-bold inline border-b-4 mb-4 border-[var(--accent)]'>Projects</h1>
            <p className='text-[var(--text-secondary)] text-xl mt-6 max-w-3xl'>
              A collection of applications, websites, and software solutions I&apos;ve built using various technologies and frameworks.
            </p>
          </div>

          {/* Filter/Category buttons could go here in the future */}
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => {
              const card = (
                <div className='bg-[var(--bg-card)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-500/20 h-full cursor-pointer'>
                  {/* Project Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className='object-cover hover:scale-110 transition-transform duration-700'
                    />
                    {project.category && (
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 text-xs bg-brand-600 text-white rounded-full'>
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-xl font-bold text-[var(--text-heading)] line-clamp-2'>
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className='text-sm text-[var(--text-secondary)] ml-2 flex-shrink-0'>
                          {project.year}
                        </span>
                      )}
                    </div>

                    <p className='text-[var(--text-secondary)] text-sm mb-4 line-clamp-3'>
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    {project.techStack && (
                      <div className='flex flex-wrap gap-1 mb-4'>
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className='px-2 py-1 bg-[var(--bg-card-hover)] text-[var(--accent)] rounded text-xs border border-brand-500/20'
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className='px-2 py-1 text-[var(--text-secondary)] text-xs'>
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* External Links */}
                    <div className='flex items-center space-x-3'>
                      {project.github && (
                        <span
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank') }}
                          className='text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300'
                        >
                          <FaGithub size={18} />
                        </span>
                      )}

                      {project.live && (
                        <span
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.live, '_blank') }}
                          className='text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300'
                        >
                          <FaLink size={18} />
                        </span>
                      )}

                      {project.ios && (
                        <span
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.ios, '_blank') }}
                          className='text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300'
                        >
                          <FaApple size={18} />
                        </span>
                      )}

                      {project.private && (
                        <span className='text-yellow-500 text-xs'>Private</span>
                      )}
                    </div>
                  </div>
                </div>
              )

              return project.slug ? (
                <Link key={project.id} href={`/projects/${project.slug}`} className='block'>
                  {card}
                </Link>
              ) : (
                <div key={project.id}>{card}</div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className='text-center mt-16'>
            <p className='text-[var(--text-secondary)] mb-6'>
              Interested in working together or have a project in mind?
            </p>
            <Link
              href='/#contact'
              className='inline-flex items-center px-8 py-3 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white rounded-lg transition-all duration-300 font-medium'
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
