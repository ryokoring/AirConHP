import { Badge } from '@/components/Badge'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import styles from '@/styles/Layout.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Blog Example with Newt',
  description: 'NewtとNext.jsを利用したブログです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.Wrapper}>
      {children}
      <Footer />
      <Badge />
    </div>
  )
}

