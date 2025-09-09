import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

import Layout from '@/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <main className={`${montserrat.variable} font-sans`}>
        <Layout>
          <div className={styles.center}></div>
          <Component {...pageProps} className='max-w-[1200px] mx-auto px-4' />
        </Layout>
      </main>
    </div>
  )
}
