import { MangaReadScreen } from 'app/features/manga/r/[mangaId]/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <MangaReadScreen />
    </>
  )
}
