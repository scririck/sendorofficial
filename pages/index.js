import Head from 'next/head';
import {useContext} from 'react';
import { Context } from '../lib/Context';
import Header from '../components/Header';

export default function Home() {

  const {
    t, darkTheme
  } = useContext(Context);

  return (
    <div className={`page ${darkTheme ? "dark-theme" : ""}`}>
      <Head>
        <title>Sendor LLC</title>
        <meta name="description" content="Created by Hyur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

    </div>
  )
}
