import Head from 'next/head';
import Link from 'next/link';
import Back from '../components/Back';
import Header from '../components/Header';
import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS - Impressum</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="title">
          Impressum
          <br></br>
        </h1>
        <h3>
          Verantwortlich für die Website, so wie <br></br>
          Konzept/ Design &amp; Programmierung/ Umsetzung:
        </h3>
        <p>
          Mag. Michaela Heyer<br></br>
          Pernerstorfergasse XX/x/XX <br></br>1100 Wien<br></br> Tel.
          +43650XXXX321 <br></br>Mail: XXX at hotmail.com <br></br>
          <br></br>Private Seite <br></br>
          <br></br>
          Stand: 04.07.2020
        </p>
        <h3>Icons on startpage:</h3>
        <li>
          {' '}
          <a href="http://www.creaticca.com/" title="Creaticca Creative Agency">
            Creaticca Creative Agency
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/de/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
        <li>
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/de/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/de/autoren/ultimatearm"
            title="ultimatearm"
          >
            ultimatearm
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/de/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.flaticon.com/de/autoren/srip" title="srip">
            srip
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/de/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
        <h3>Sun Icon based on:</h3>
        <li>
          {' '}
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/de/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
      </main>
      <Back />
      <style jsx>
        {`
          .brand {
            width: 300px;
            height: 80px;
            margin: 10px;
          }
          header {
            font-size: 50px;
            margin: 25px 50px 50px 50px;
          }
          .container {
            text-align: center;
            background-color: #6dd2dc52;
            padding: 20px 0px 90px 0px;
          }
        `}
      </style>
    </div>
  );
}
