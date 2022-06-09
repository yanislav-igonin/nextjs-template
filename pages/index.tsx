import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="My NextJS Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center m-4">
        <h1 className="text-4xl">NextJS Template</h1>
      </header>

      {/* <main>
      </main> */}

      {/* <footer className="flex sticky h-6 bg-orange-200">
      </footer> */}
    </div>
  )
}

export default Home
