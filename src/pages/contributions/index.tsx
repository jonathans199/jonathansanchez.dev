import Head from 'next/head'
import { WorkItem } from '../../components/WorkItem'
import { contributions } from './../../../data/contributions'

const Contributions = () => {
	return (
		<>
			<Head>
				<title>Jonathan Sanchez - Open Source Contributions | GitHub Projects</title>
				<meta name='description' content='Explore Jonathan Sanchez&apos;s contributions to open source projects, GitHub repositories, and community-driven development initiatives.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='max-w-[1200px] mx-auto pt-40 px-4'>
				<section className='min-h-screen'>
					<h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600'>Contributions</h2>
					<div className='flex flex-col items-center my-8'>
						{contributions.map(item => (
							<WorkItem key={item.id} item={item} />
						))}
					</div>
				</section>
			</section>
		</>
	)
}

export default Contributions
