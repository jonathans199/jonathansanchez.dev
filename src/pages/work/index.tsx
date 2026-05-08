import { useMemo, useState } from 'react'
import Head from 'next/head'
import { WorkItem } from '../../components/WorkItem'
import { projects } from './../../../data/projects'

const ALL = 'All'

const normalizeCategory = (category?: string) => {
  if (!category) return 'Other'
  if (category === 'IOS Mobile App') return 'Mobile App'
  return category
}

const Work = () => {
  const [active, setActive] = useState<string>(ALL)

  const categories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => set.add(normalizeCategory(p.category)))
    return [ALL, ...Array.from(set).sort()]
  }, [])

  const filtered = useMemo(() => {
    if (active === ALL) return projects
    return projects.filter(p => normalizeCategory(p.category) === active)
  }, [active])

  return (
    <>
      <Head>
        <title>Jonathan Sanchez - Work Portfolio | Software Projects & Applications</title>
        <meta name='description' content='Explore Jonathan Sanchez&apos;s portfolio of software projects, applications, and development work across various technologies and industries.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='max-w-[1200px] mx-auto pt-40 px-4'>
        <section className='min-h-screen'>
          <h2 className='text-6xl font-bold inline border-b-4 mb-4 border-[var(--accent)] '>Work</h2>

          <div className='flex flex-wrap gap-2 mt-8'>
            {categories.map(cat => {
              const isActive = cat === active
              return (
                <button
                  key={cat}
                  type='button'
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    isActive
                      ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                      : 'bg-transparent border-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                  }`}>
                  {cat}
                </button>
              )
            })}
          </div>

          <div className='flex flex-col items-center my-8'>
            {filtered.length === 0 ? (
              <p className='text-[var(--text-muted)] py-16'>No projects in this category yet.</p>
            ) : (
              filtered.map(item => <WorkItem key={item.id} item={item} />)
            )}
          </div>
        </section>
      </section>
    </>
  )
}

export default Work
