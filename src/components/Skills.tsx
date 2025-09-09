import { logos } from '@/../data/logos'

const Skills = () => {
  return (
    <section className='bottom-margin-large'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-4xl font-bold inline border-b-4 mb-4 border-red-600'>Technologies</h2>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 text-center my-8'>
        {logos.map((logo, index) => (
          <div key={index} className='group flex flex-col items-center'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 mb-2 bg-gray-200 rounded-lg p-3 group-hover:bg-gray-100 transition-colors duration-300'>
              <img 
                src={logo.url} 
                alt={logo.name}
                className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${
                  logo.name === 'Next.js' || logo.name === 'Supabase' 
                    ? 'brightness-150 contrast-200' 
                    : 'brightness-75'
                } group-hover:brightness-100 group-hover:contrast-100`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <p className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
              {logo.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills