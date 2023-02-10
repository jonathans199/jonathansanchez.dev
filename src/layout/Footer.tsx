import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='text-center py-4 text-slate-500 flex flex-col items-center space-y-2' >
      <a href='https://github.com/jonathans199/jonathansanchez.dev' className='hover:text-red-200'>
        <FaGithub size={30} />
      </a>
      <div className='flex justify-center'>
        <span>Designed and Build by Jonathan Sanchez</span>
      </div>
      <small>Copyright © 2023</small>
    </footer>
  )
}
