import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>

      <main>
        <h1>-</h1>
        <h2>Sorry, page is not ready yet!</h2>

        {/* <h1 className="title">
          Welcome to Freezer Food Finder - defrost reminder
        </h1>

        <p className="description">
          Set a date for the defrost reminder:
          
        </p> */}

        <Link href="./start">
          <button>Back to Start</button>
        </Link>
      </main>

      <style jsx>{`
        h1 {
          font-size: 120px;
          color: #e4b433;

          text-align: center;
          margin-top: -70px;
        }
        h2 {
          font-size: 120px;
          color: black;
          text-shadow: 5px 5px #e4b433;
          text-align: center;
          margin-top: 95px;
        }
        button {
          font-size: 25px;
          color: black;
          text-shadow: 2px 2px #ffffff;
          border-style: solid;
          border-color: black;
          border-width: 9px;
          border-radius: 5px;
          background-color: #fbf9fba3;
          display: inline-block;
          border-style: outset;
          border-color: #6dd2dc;
          padding: 8px;
          width: 300px;
          margin: 490px 800px 50px 800px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background: url(/image/underc.JPG) #6dd2dc52;
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
