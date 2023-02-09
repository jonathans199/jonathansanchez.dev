import { WorkItem } from '../../components/WorkItem'
import { projects } from './../../../data/projects'

const Work = () => {
  return (
    <section className='max-w-[1200px] mx-auto pt-40'>
      <section className='h-screen min-h-screen h-full'>
        <div className='flex flex-col  justify-center'>
          <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600'>Work</h2>
        </div>
        <div className='flex flex-col items-center my-8'>
          {projects.map(item => (
            <WorkItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Work
