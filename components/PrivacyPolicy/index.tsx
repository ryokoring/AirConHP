import React from 'react'
import styles from './styles.module.css'
import type { PrivacyPolicy } from '@/types/page'

export function PrivacyPolicy({
  data,
}: {
  data: PrivacyPolicy['data']
}) {
  const { richtext } = data
  console.log(richtext)

  return (
    <>
      <div className={styles.content}>
        {richtext && (
          <div
            dangerouslySetInnerHTML={{ __html: richtext }}
          ></div>
        )}
      </div>
    </>
  )
}