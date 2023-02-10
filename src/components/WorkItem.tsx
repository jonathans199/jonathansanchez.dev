import Link from 'next/link'
import { FaGithub, FaLink, FaApple } from 'react-icons/fa'

export const WorkItem = ({ item }: any) => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div>
          <img className='object-contain rounded-2xl shadow-lg hover:scale-110 duration-700' src={item.img} alt='' />
        </div>
        <div className='lg:pr-10'>
          <h5 className='mb-4 text-4xl font-extrabold leading-none'>{item.title}</h5>
          <p className='mb-6 text-gray-300'>{item.description}</p>
          {item.tech && <p className='mb-6 text-sm text-white-400 text-xl'>{item.tech}</p>}
          <hr className='mb-5 border-gray-300' />
          <div className='flex justify-end items-center space-x-4'>
            {item.ios && (
              <Link
                href={item.ios}
                target={'_blank'}
                className='text-gray-600 transition-colors duration-300 hover:text-red-100'>
                <FaApple size={30} />
              </Link>
            )}

            {item.github && (
              <Link
                href={item?.github}
                target={'_blank'}
                className='text-gray-600 transition-colors duration-300 hover:text-red-100'>
                <FaGithub size={30} />
              </Link>
            )}

            {item.live && (
              <Link
                href={item?.live}
                target={'_blank'}
                className='text-gray-600 transition-colors duration-300 hover:text-red-100'>
                <FaLink size={30} />
              </Link>
            )}

            {item.private && (
              <Link href='#' className='text-gray-600 transition-colors duration-300 hover:text-red-400'>
                Private Repo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
