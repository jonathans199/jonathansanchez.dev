import Head from 'next/head'

const Talks = () => {
  return (
    <>
      <Head>
        <title>Jonathan Sanchez - Presentations & Talks | Tech Conferences & Meetups</title>
        <meta name='description' content='Watch Jonathan Sanchez&apos;s technical presentations and talks from various tech conferences, meetups, and developer events.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='max-w-[1200px] mx-auto pt-40 px-4'>
        <section className='min-h-screen'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-red-600'>Presentations</h2>
          </div>
          <div className='flex flex-col items-center my-8'>
            <div className='presentations max-w-full'>
              <img src='/soflodevcon2022.jpeg' alt='SoFlo DevCon 2022 Presentation' className='w-full max-w-[800px] h-auto' />
              <iframe
                className='my-6 w-full max-w-[800px] aspect-video'
                src='https://www.youtube.com/embed/Ojtneh8TV1s'
                title='SoFlo DevCon 2022 - YouTube video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
              <img src='/techhub.png' alt='Tech Hub Presentation' className='w-full max-w-[800px] h-auto' />

              <iframe
                className='my-6 w-full max-w-[800px] aspect-video'
                src='https://www.youtube.com/embed/dpK-SIfkunw'
                title='Tech Hub Presentation - YouTube video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Talks
