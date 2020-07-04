import Head from 'next/head';
import React, { useState, Fragment } from 'react';
import Select from 'react-select';

import Link from 'next/link';
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';

export default function Freezer() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <Head>
        <title>FMS</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Freezer Food Finder</h1>

        <p className="description">
          Search your freezer for a product:
          {/* <code>pages/index.js</code> */}
        </p>
      </main>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Name the product"
        />
        <input type="submit" value="Search" />
      </form>
      <p>show all button here? </p>
      <p>select by catergorie :) </p>
    </div>
  );
}
