import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>

      <main>
        <img
          src="/image/brandnamenew.png"
          alt="Freezer Food Finder"
          className="brand"
        ></img>

        <p className="description">What do you want to do?</p>

        <div className="grid">
          <Link href="/addfood">
            <a className="card">
              <h3>Store Food &rarr;</h3>
              <img
                src="/image/putin.png"
                alt="put your things in the freezer"
                className="icon"
              ></img>
              <p>Add new products to the freezer food finder</p>
            </a>
          </Link>
          <Link href="/searchfood">
            <a className="card">
              <h3>Find Food &rarr;</h3>
              <img
                src="/image/finder.png"
                alt="search your freezers"
                className="icon"
              ></img>
              <p>Search for your freezer food &amp; clear items</p>
            </a>
          </Link>
          <Link href="/list">
            <a className="card">
              <h3>Write Shoppinglist &rarr;</h3>
              <img
                src="/image/shopping.png"
                alt="a shopping bag filled with food"
                className="icon"
              ></img>
              <p>Add products to your shoppinglist</p>
            </a>
          </Link>
          <Link href="/defrost">
            <a className="card">
              <h3>Defrost reminder &rarr;</h3>
              <img
                src="/image/defrosti.png"
                alt="calender entry to defrost"
                className="iconc"
              ></img>
              <p>
                Add a defrost date &amp; <br></br>get a reminder
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <Link href="/impressum">
          <h3>Impressum</h3>
        </Link>
        <Link href="/heyerMi">
          <button>Back to the future!</button>
        </Link>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #6dd2dc52;
        }
        button {
          font-size: 15px;
          color: #de21e069;
          text-shadow: 2px 2px #ffffff;
          border-style: solid;
          border-color: white;
          border-width: 2px;
          border-radius: 5px;
          background-color: #51dcfa00;
          display: inline-block;
          border-style: outset;
          border-color: whitesmoke;
          padding: 8px;

          margin: 10px 50px 10px 50px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 20px;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .icon {
          width: 80px;
          height: 80px;
          float: right;
        }
        .iconc {
          width: 70px;
          height: 70px;
          float: right;
        }
        .brand {
          width: 850px;
          height: 200px;
        }
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
