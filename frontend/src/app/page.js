import Skills from './Skills'
import SkillForm from './SkillForm'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container bg-light bg-gradient p-4 rounded-1'>
        <SkillForm/>
      </div>
      <div className='container'>
      <Skills/>
      </div>
    </main>
  )
}
