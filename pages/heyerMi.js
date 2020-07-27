import Head from 'next/head';
import Link from 'next/link';
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
      <header>
        <img src="/image/heyer_mi.png" alt="Mag. Michaela Heyer"></img>
      </header>
      <main>
        <h1>
          Liked what you heard and saw?
          <br></br>
        </h1>
        <h3>
          You can HIRE ME<br></br>
          via <br></br>
          <p>heyer_mi@outlook.com</p>
          <br></br>
          <br></br>or<br></br>
          check out
          <br></br>
          <a href="https://www.linkedin.com/in/michaela-h-bb2423110/">
            <p> my LinkedIn Profile</p>
          </a>
          <br></br>
          or<br></br>
          reach out to
          <br></br> <p>Antje!</p>
          <br></br>
          <br></br>
        </h3>
        <h4> N E X T ! &nbsp; &nbsp; :)</h4>
      </main>
      <Link href="./start">
        <button>Back to Start</button>
      </Link>
      <style jsx>
        {`
          img {
            width: 700px;
            height: 190px;
            margin: 5px;
          }
          h1 {
            font-size: 40px;
            color: white;
            text-shadow: 2px 2px black; 
            border-color: white;     
            display: inline-block;   
            padding: 5px;
            margin-top: 30px;
            margin-bottom: 60px;
            width: 60%;
            align: center;
          }
          h3 {
            font-size: 40px;
            color: white;
            text-shadow: 2px 2px black; 
            border-color: white;     
            display: inline-block;   
            padding: 5px;
            margin-top: 10px;
            margin-bottom: 20px;
            width: 60%;
            align: center;
          }
          h4 {
            font-size: 70px;
            color: white;
            text-shadow: 2px 2px black;
            border-style: solid;
            border-color: white;
            border-width: 3px;
            border-radius: 5px;
            background-color: #e02bd282;
            display: inline-block;
            border-style: outset;
            border-color: whitesmoke;
            padding: 10px;
            margin-top: 50px;
            margin-bottom: 40px;
            width: 50%;
            align: center;
          }
          p {
            font-size: 22px;
            color: white;
            text-shadow: 2px 2px black;
            border-style: solid;
            border-color: white;
            border-width: 3px;
            border-radius: 5px;
            background-color: #e02bd282;
            display: inline-block;
            border-style: outset;
            border-color: whitesmoke;
            padding: 5px;
            margin-top: 10px;
            margin-bottom: 40px;
            width: 50%;
            align: center;

          }
          }
          .container {
            text-align: center;
            background-color: #6dd2dc52;
            padding: 20px 0px 90px 0px;
          }
          button {
            font-size: 20px;
            color: black;
            text-shadow: 2px 2px #ffffff;
            border-style: solid;
            border-color: white;
            border-width: 3px;
            border-radius: 5px;
            background-color: #51dcfa4f;
            display: inline-block;
            border-style: outset;
            border-color: whitesmoke;
            padding: 8px;
            margin-top: 200px;
            margin-bottom: 10px;
            
            align: center;
          }
        `}
      </style>
    </div>
  );
}
