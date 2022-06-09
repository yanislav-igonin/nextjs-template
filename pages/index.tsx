import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import useDarkMode from '../utils/useDarkMode';

const techs = ['nextjs', 'typescript', 'tailwind'];



const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();

  const renderTechs = () => techs
    .map((t) => <li className="underline-offset-2 underline dark:text-white" key={t}>{t}</li>)

  return (
    <div>
      <Head>
        <title>NextJS Template</title>
      </Head>

      <div className="absolute top-0 right-0 p-2">
        <button onClick={() => setTheme(theme)}>
          <Image src="/darkmode.png" alt="dark mode" height={24} width={24} />
        </button>
      </div>

      <main className="flex h-screen justify-center items-center bg-gradient-to-tr from-emerald-400 to-fuchsia-400">
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
