'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getApp } from '@/lib/newt'
import styles from './styles.module.css'

export function Header() {
  const [app, setApp] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchApp = async () => {
      const appData: any = await getApp()
      setApp(appData)
    }
    fetchApp()
  }, [])

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Header_Inner}>
          <div className={styles.Title} onClick={() => router.push('/')}>
            <div className={styles.Title_Text}>Logo</div>
          </div>
          <div className={styles.Link}>999-8888-7777</div>
        </div>
      </header>
      <header className={styles.SubHeader}>
        <div className={styles.SubHeaderText}>
          <div>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/pages/page-1')}
            >
              ホーム
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/ConAirCon')}
            >
              個人用エアコン
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/CorpAirCon')}
            >
              法人用エアコン
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/pages/page-2')}
            >
              できることリスト
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/Contact')}
            >
              お問い合わせ
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/pages/page-4')}
            >
              企業情報
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/pages/page-5')}
            >
              採用情報
            </span>
            <span
              style={{ cursor: 'pointer' }}
              className={styles.SubHeaderMargin}
              onClick={() => router.push('/pages/page-6')}
            >
              プライバシーポリシー
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
