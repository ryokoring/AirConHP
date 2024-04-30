import { Cover } from '@/components/ConAirCon/Cover'
import { Pagination } from '@/components/ConAirCon/Pagination'
import { Side } from '@/components/ConAirCon/Side'
import { ArticleCard } from '@/components/CorpAirCon/ArticleCard'
import { getApp, getArticles } from '@/lib/newt'
import styles from '@/styles/ArticleList.module.css'

export default async function Page() {
  const app = await getApp()
  const { articles, total } = await getArticles({
    limit: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10,
  })
  const headingText = 'Recent Articles'

  return (
    <>
      {app.cover?.value && <Cover />}
      <div className={styles.Container}>
        <div className={styles.Container_Inner}>
          <main className={styles.Articles}>
          <h2 className={styles.Articles_Heading}>{headingText}</h2>
            <div className={styles.Articles_Inner}>
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
              <div>
                
              </div>
            </div>
            <Pagination total={total} current={1} basePath={'/page'} />
          </main>
          <Side />
        </div>
      </div>
    </>
  )
}

