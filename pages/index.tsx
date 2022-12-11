import Head from "next/head"
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>YAIDE - Yet Another IDE</title>
        <meta name="description" content="Chats - letsdive-wa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-screen p-5 max-w-screen place-items-center">
        <main className="relative flex w-full h-full bg-gray-100 rounded-sm">
          Hello
        </main>
      </div>
    </div>
  )
}

export default Home
