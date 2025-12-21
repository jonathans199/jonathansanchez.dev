import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-center py-4 text-slate-500 flex flex-col items-center space-y-2' >
      <a href='https://github.com/jonathans199/jonathansanchez.dev' className='hover:text-red-200' target='_blank' rel="norefer noreferrer">
        <FaGithub size={30} />
      </a>
      <div className='flex justify-center'>
        <span>Designed and Built by Jonathan Sanchez</span>
      </div>
      <div className='flex justify-center'>
        <Link href='/privacy-policy' className='hover:text-red-600 duration-300'>
          Privacy Policy
        </Link>
      </div>
      <small>Copyright © 2023</small>
    </footer>
  )
}
