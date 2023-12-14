import Skills from './Skills'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Skills/>
    </main>
  )
}
