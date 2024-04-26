import { ArticleCard } from '@/components/ConAirCon/ArticleCard'
import { Cover } from '@/components/ConAirCon/Cover'
import { Pagination } from '@/components/ConAirCon/Pagination'
import { Side } from '@/components/ConAirCon/Side'
import { getConApp, getConArticles } from '@/lib/newt'
import styles from '@/styles/ArticleList.module.css'

type Props = {
  params: {
    page: string
  }
}

export async function generateStaticParams() {
  const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10
  try {
    const { total } = await getConArticles()
    const maxPage = Math.ceil(total / limit)
    const pages = Array.from({ length: maxPage }, (_, index) => index + 1)

    return pages.map((page) => ({
      page: page.toString(),
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []; // または適切なエラーハンドリングを行う
  }
}
export const dynamicParams = false

export default async function Page({ params }: Props) {
  const { page: _page } = params
  const page = Number(_page) || 1

  const app = await getConApp()
  const headingText = 'Recent Articles'

  const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10
  const { articles, total } = await getConArticles({
    limit,
    skip: limit * (page - 1),
  })

  return (
    <>
      {app.cover?.value && <Cover />}
      <div className={styles.Container}>
        <div className={styles.Container_Inner}>
          <main className={styles.Articles}>
            <div className={styles.Articles_Inner}>
              <h2 className={styles.Articles_Heading}>{headingText}</h2>
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
            <Pagination total={total} current={page} basePath={'/page'} />
          </main>
          <Side />
        </div>
      </div>
    </>
  )
}
