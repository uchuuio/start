import Head from 'next/head';

import Separator from '../components/separator';
import Time from '../components/time';
import Currency from '../components/currency';
import Wanikani from '../components/wanikani';

export default function Home() {
  return (
    <>
      <Head>
        <title>START</title>
      </Head>

      <div className="min-h-screen h-full flex items-center justify-center bg-no-repeat bg-cover" style={{backgroundImage: 'url(/2641048.gif)'}}>
        <main className="mx-auto p-8 bg-blue-200 bg-opacity-50 rounded-lg border-2 border-blue-300 border-opacity-100 shadow-2xl text-gray-900 text-center text-xl font-light transition duration-500 ease-in-out transform hover:scale-110">
          <Time />
          <Separator />
          <Currency />
          <Separator />
          <Wanikani />
        </main>
      </div>
    </>
  )
}
