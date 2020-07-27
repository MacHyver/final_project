import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FMS - Start</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <main>
        <h1 className="title">
          Welcome to
          <br></br>
          <img
            src="/image/brandnamenew.png"
            alt="Freezer Food Finder"
            className="brand"
          ></img>
        </h1>
        <div>
          <p>
            To use our storage, search, shoppinglist and defrost features
            <br></br>
            please log in:
            <form>
              <input type="text" placeholder="Username"></input>
            </form>
            <form>
              <input type="text" placeholder="Password"></input>
            </form>
          </p>
        </div>
        <p>
          New at Freezer Food Finder?
          <br></br>
          Create account <a href="/start">here</a>
        </p>
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
            background-color: #6dd2dc52;
          }
          h1 {
            font-size: 40px;
            color: white;
            text-shadow: 2px 2px black;
            border-color: white;
            display: inline-block;
            padding: 5px;
            margin-top: -250px;
            margin-bottom: 50px;
            width: 60%;
            align: center;
          }
          input {
            width: 300px;
            height: 40px;
            color: black;
            font-size: 19px;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: white;
            margin: 15px 0px 0px 0px;
            padding: 7px;
            border-color: lightgrey;
          }
        `}
      </style>{' '}
    </div>
  );
}
