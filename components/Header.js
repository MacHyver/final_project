import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Head>
        <title>FMS - Start</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <header>
        <img src="/image/brandnamenew.png" alt="Freezer Food Finder"></img>
      </header>

      <style jsx>{`
        header {
        }

        header img {
          width: 850px;
          height: 225px;
        }
      `}</style>
    </div>
  );
}
