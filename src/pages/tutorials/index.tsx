const videos = [
  { id: 1, url: 'https://www.youtube.com/embed/T-Pum2TraX4' },
  { id: 2, url: 'https://www.youtube.com/embed/p239HLbuMTQ' },
  { id: 3, url: 'https://www.youtube.com/embed/XD6eJalN1Tw' },
  { id: 4, url: 'https://www.youtube.com/embed/Gp0gY89FPqk' },
  { id: 5, url: 'https://www.youtube.com/embed/IIyKr9QYhvc' },
  { id: 6, url: 'https://www.youtube.com/embed/c0sWZZ41iIA' },
]

const Iframe = ({ item }: any) => {
  return (
    <iframe
      className='my-6'
      width='1000'
      height='600'
      src={item.url}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
  )
}

const Tutorials = () => {
  return (
    <section className='max-w-[1200px] mx-auto pt-40'>
      <section className='h-screen min-h-screen h-full'>
        <div className='flex flex-col  justify-center'>
          <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600'>Tutorials</h2>
        </div>
        <div className='flex flex-col items-center my-8'>
          {videos.map(item => (
            <Iframe key={item.id} item={item} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Tutorials
