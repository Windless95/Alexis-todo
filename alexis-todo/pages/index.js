import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import checks from './checklist'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Alexis todos cause shes a lazy bitch</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alexis Todo's
        </h1>
      </main>
    </div>
  )
}
