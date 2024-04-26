import { getCorpApp } from '@/lib/newt'
import styles from '@/styles/Cover.module.css'

export async function Cover() {
  const app = await getCorpApp()

  return (
    <div
      className={styles.Cover}
      style={{ backgroundImage: `url(${app.cover?.value})` }}
    >
      &nbsp;
    </div>
  )
}
