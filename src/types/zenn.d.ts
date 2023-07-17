declare type ArticleProps = {
  id: number
  post_type: 'Article'
  title: string
  slug: string
  comments_count: number
  liked_count: number
  body_letters_count: number
  article_type: string
  emoji: string
  is_suspending_private: boolean
  published_at: string
  body_updated_at: string
  source_repo_updated_at: null
  pinned: boolean
  path: string
  user: [Object]
  publication: null
}

declare type ZennArticleFetcherProps = {
  articles: ArticleProps[]
}
