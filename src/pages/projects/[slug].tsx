import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLink, FaApple, FaArrowLeft } from 'react-icons/fa'
import { projects } from '../../../data/projects'

interface Project {
  id: string
  slug: string
  img: string
  title: string
  description: string
  fullDescription?: string
  tech: string
  techStack?: string[]
  features?: string[]
  github?: string
  live?: string
  ios?: string
  private?: boolean
  year?: string
  category?: string
  screenshots?: string[]
}

interface ProjectPageProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{project.title} | Jonathan Sanchez Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1200px] mx-auto pt-20 px-4 pb-20">
        {/* Back Button */}
        <Link 
          href="/work" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-red-600 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Work
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Project Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[var(--bg-card)]">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              {project.category && (
                <span className="inline-block px-3 py-1 text-sm bg-red-600 text-white rounded-full mb-4">
                  {project.category}
                </span>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-heading)] mb-4">
                {project.title}
              </h1>
              {project.year && (
                <p className="text-[var(--text-secondary)] text-lg mb-4">{project.year}</p>
              )}
            </div>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--bg-card)] text-red-400 rounded-md text-sm border border-red-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[var(--text-secondary)]">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex items-center space-x-6 pt-6">
              {project.ios && (
                <Link
                  href={project.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-red-600 transition-colors duration-300"
                >
                  <FaApple size={24} />
                  <span>App Store</span>
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-red-600 transition-colors duration-300"
                >
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </Link>
              )}

              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-red-600 transition-colors duration-300"
                >
                  <FaLink size={24} />
                  <span>Live Demo</span>
                </Link>
              )}

              {project.private && (
                <span className="flex items-center space-x-2 text-[var(--text-secondary)]">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span>Private Repository</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Additional Tech Info */}
        <div className="mt-16 p-6 bg-[var(--bg-card)] rounded-lg border border-red-600/20">
          <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-3">Technologies Used</h3>
          <p className="text-[var(--text-secondary)]">{project.tech}</p>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[var(--text-heading)] mb-8">Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative group">
                  <div className="relative rounded-lg overflow-hidden shadow-xl bg-[var(--bg-card)]">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for projects that have slugs
  const paths = projects
    .filter(project => project.slug)
    .map(project => ({
      params: { slug: project.slug }
    }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find(p => p.slug === params?.slug)

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    }
  }
}
