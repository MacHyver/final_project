import Head from 'next/head';
import React, { useState, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import Select from 'react-select';
import {
  freezerOptions,
  drawerOptions,
  productOptions,
  madeOptions,
} from './data';
import Link from 'next/link';
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';

export default function Freezer() {
  const [value, setValue] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [amount, setAmount] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
    // setAmount(event.target.amount);
  }
  // box one doesnt work anymore added the extra function thingy (amount and Two)

  function handleInput(event) {
    setAmount(event.target.amount);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  // function handleSubmitTwo(event) {
  //   event.preventDefault();
  // }

  return (
    <div className="container">
      <Head>
        <title>Manage Freezer</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <header>
        <img
          src="/image/brandnamenew.png"
          alt="Freezer Food Finder"
          className="brand"
        ></img>
      </header>

      {/* heres been the className container */}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Name the product"
          />
          {/* <input type="submit" value="Save" /> */}
        </form>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            amount={amount}
            onChange={handleInput}
            placeholder="How much ... kg./gr./ltr./pcs"
          />
        </form>
        <br></br>
        <div>
          <Select defaultValue={productOptions} options={productOptions} />
          <br></br>
          <Select defaultValue={freezerOptions} options={freezerOptions} />
          <br></br>
          <Select defaultValue={drawerOptions} options={drawerOptions} />
          <br></br>
          <Select defaultValue={madeOptions} options={madeOptions} />
          <br></br>
        </div>
        <div className="wrapper">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <br></br>
        <input type="submit" value="Save" />
      </div>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #6dd2dc52;
            font-size: 20px;
          }

          img {
            width: 650px;
            height: 150px;
            margin: 10px;
            margin: -100px 50px 80px 50px;
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

          .wrapper {
            inline: 0px solid transparent;
            background: white;
            font-size: 0x;
            border-radius: 4px;
            box-shadow: inset 0 2px 2px #e9e9e9;
            border: 1px solid #aeaeae;

            padding: 6px 50px 6px 10px;
          }
        `}
      </style>
    </div>
  );
}
