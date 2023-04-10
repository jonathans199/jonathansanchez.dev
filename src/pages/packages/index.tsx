import { WorkItem } from '../../components/WorkItem'
import { packages } from '../../../data/packages'

const Packages = () => {
	return (
		<section className='max-w-[1200px] mx-auto pt-40'>
			<section className='min-h-screen'>
				<h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600 '>Packages Built</h2>
				<div className='flex flex-col items-center my-8'>
					{packages.map(item => (
						<WorkItem key={item.id} item={item} />
					))}
				</div>
			</section>
		</section>
	)
}

export default Packages
