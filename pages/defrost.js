import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <header>
        <img
          src="/image/brandnamenew.png"
          alt="Freezer Food Finder"
          className="brand"
        ></img>
      </header>
      <main>
        <h1 className="title">
          Welcome to Freezer Food Finder - defrost reminder
        </h1>

        <p className="description">
          Set a date for the defrost reminder:
          {/* <code>pages/index.js</code> */}
        </p>
      </main>
    </div>
  );
}
