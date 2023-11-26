import Skills from './Skills'
import SkillForm from './SkillForm'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <SkillForm/>
      <Skills/>
    </main>
  )
}
