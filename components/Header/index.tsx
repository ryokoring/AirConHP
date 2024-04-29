import Image from 'next/image'
import Link from 'next/link'
import { getApp } from '@/lib/newt'
import styles from './styles.module.css'

export async function Header() {
  const app = await getApp()

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Header_Inner}>
          <Link className={styles.Title} href="/">
            {/*アイコンの話
           {app.icon?.type === 'emoji' && (
            <span className={styles.Title_Icon}>{app.icon.value}</span>
          )}
          {app.icon?.type === 'image' && (
            <span className={styles.Title_Icon}>
              <Image src={app.icon.value} alt="" width="26" height="26" />
            </span>
          )} */}
            <div className={styles.Title_Text}>Logo</div>
          </Link>
          <div className={styles.Link}>999-8888-7777</div>
        </div>
      </header>
      <header className={styles.SubHeader}>
        <div className={styles.SubHeaderText}>
          <div>
            <Link href="/pages/page-1">
              <span className={styles.SubHeaderMargin}>ホーム</span>
            </Link>
            <Link href="/ConAirCon">
              <span className={styles.SubHeaderMargin}>個人用エアコン</span>
            </Link>
            <Link href="/CorpAirCon">
              <span className={styles.SubHeaderMargin}>法人用エアコン</span>
            </Link>
            <Link href="/pages/page-2">
              <span className={styles.SubHeaderMargin}>できることリスト</span>
            </Link>
            <Link href="/Contact">
              <span className={styles.SubHeaderMargin}>お問い合わせ</span>
            </Link>
            <Link href="/pages/page-4">
              <span className={styles.SubHeaderMargin}>企業情報</span>
            </Link>
            <Link href="/pages/page-5">
              <span className={styles.SubHeaderMargin}>採用情報</span>
            </Link>
            <Link href="/pages/page-6">
              <span className={styles.SubHeaderMargin}>
                プライバシーポリシー
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
