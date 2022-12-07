import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Checks from '../components/checklist'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Alexis todos cause shes a lazy bitch</title>
      </Head>

      <main className={styles.main} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500>
        <h1 className={styles.title}>
          Alexis Todo's
        </h1>
        <Checks />
      </main>
    </div>
  )
}
