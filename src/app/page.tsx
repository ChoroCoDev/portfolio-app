import { About, Blog, Main, Skills } from '@/components'

const zennApiURL = 'https://zenn.dev/'
const zennFetcher = async () => {
  const res = await fetch(`${zennApiURL}api/articles?username=choro963&order=latest`)
  const result: ZennArticleFetcherProps = await res.json()
  return result
}

export default async function Home() {
  const articles = await zennFetcher()
  return (
    <main>
      <Main />
      <About />
      <Blog {...articles} />
      <Skills />
    </main>
  )
}
