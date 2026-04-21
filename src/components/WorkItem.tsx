import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLink, FaApple, FaEye } from 'react-icons/fa'

export const WorkItem = ({ item }: any) => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div>
          <img className='object-contain rounded-2xl shadow-lg hover:scale-110 duration-700' src={item.img} alt='' />
        </div>
        <div className='lg:pr-10'>
          <h5 className='mb-4 text-4xl font-extrabold leading-none'>{item.title}</h5>
          <p className='mb-6 text-[var(--text-secondary)]'>{item.description}</p>
          {item.tech && <p className='mb-6 text-sm text-white-400 text-xl'>{item.tech}</p>}
          
          {/* View Details Button */}
          {item.slug && (
            <div className='mb-6'>
              <Link
                href={`/projects/${item.slug}`}
                className='inline-flex items-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors duration-300 font-medium'>
                <FaEye className='mr-2' />
                View Details
              </Link>
            </div>
          )}
          
          <hr className='mb-5 border-gray-300' />
          <div className='flex justify-end items-center space-x-4'>
            {item.ios && (
              <Link
                href={item.ios}
                target={'_blank'}
                className='text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]'>
                <FaApple size={30} />
              </Link>
            )}

            {item.github && (
              <Link
                href={item?.github}
                target={'_blank'}
                className='text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]'>
                <FaGithub size={30} />
              </Link>
            )}

            {item.live && (
              <Link
                href={item?.live}
                target={'_blank'}
                className='text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]'>
                <FaLink size={30} />
              </Link>
            )}

            {item.private && (
              <Link href='#' className='text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent-hover)]'>
                Private Repo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
