import Head from 'next/head';

import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS - not found</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>

      <main>
        <h1 className="title">Oohh noooo!!!! This page melted away ...</h1>
        <img
          src="/image/sunnymelted.jpeg"
          alt="melted snowman"
          className="404"
        ></img>
      </main>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fbcd35;
          }
          img {
            width: 400px;
            height: 400px;
          }
        `}
      </style>
    </div>
  );
}
