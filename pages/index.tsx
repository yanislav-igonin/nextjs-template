import type { NextPage } from 'next'
import Head from 'next/head'
import { DarkModeButton } from '@components'

const techs = ['nextjs', 'typescript', 'tailwind'];

const Home: NextPage = () => {
  const renderTechs = () => techs
    .map((t) => <li className="underline-offset-2 underline dark:text-white" key={t}>{t}</li>)

  return (
    <div>
      <Head>
        <title>NextJS Template</title>
      </Head>

      <div className="absolute top-0 right-0 p-2">
        <DarkModeButton />
      </div>

      <main className="flex h-screen justify-center items-center bg-gradient-to-tr from-emerald-400 to-fuchsia-400 dark:from-emerald-600 dark:to-fuchsia-600">
        <div className="p-20 shadow-md bg-white dark:bg-slate-600">
          <h1 className="text-4xl m-4 dark:text-white">nextjs template</h1>
          <h2 className="text-2xl m-2 text-center dark:text-white">techstack</h2>
          <ul className="flex justify-center items-center flex-col">
            {renderTechs()}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
