import React from 'react'
import styles from './styles.module.css'
import type { CorporateInformation } from '@/types/page'

export function CorporateInformation({
  data,
}: {
  data: CorporateInformation['data']
}) {
  const { text, richtext } = data
  console.log(richtext)
  // <strong>タグに特定のスタイルを適用するための処理
  const cleanRichText = richtext.replace(/&lt;[^&gt;]*&gt;/g, '')

  // <strong>タグに特定のスタイルを適用するための処理
  const modifiedRichText = cleanRichText.replace(
    /<strong>/g,
    `<strong class="${styles.strongStyle}">`,
  )

  return (
    <>
      <h2 className={styles.title}>{text}</h2>
      <div className={styles.InformationPadding}>
        {richtext && (
          <div
            className={styles.InformationFontSize}
            dangerouslySetInnerHTML={{ __html: modifiedRichText }}
          ></div>
        )}
      </div>
    </>
  )
}
