const Talks = () => {
  return (
    <section className='max-w-[1200px] mx-auto pt-40'>
      <section className='h-screen min-h-screen h-full'>
        <div className='flex flex-col  justify-center'>
          <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600'>Talks</h2>
        </div>
        <div className='flex flex-col items-center my-8'>
          <div className='presentations'>
            <img src='/soflodevcon2022.jpeg' alt='' width='800px' />
            <iframe
              className='my-6'
              width='800'
              height='500'
              src='https://www.youtube.com/embed/Ojtneh8TV1s'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            <img src='/techhub.png' alt='' width='800px' />

            <iframe
              className='my-6'
              width='800'
              height='500'
              src='https://www.youtube.com/embed/dpK-SIfkunw'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Talks
