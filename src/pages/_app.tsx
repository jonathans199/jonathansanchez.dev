import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.css'

import Layout from '@/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <div className={styles.center}></div>
        <Component {...pageProps} className='max-w-[1200px] mx-auto px-4' />
      </Layout>
    </main>
  )
}
