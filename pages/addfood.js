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
        <title>Store Food</title>
        <link rel="icon" href="/snowplus.ico" />
      </Head>
      <div>
        {/* heres been the className container */}
        <Fragment>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Name the product"
              />
              <input type="submit" value="Save" />
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
            <Select defaultValue={productOptions} options={productOptions} />
            <br></br>
            <Select defaultValue={freezerOptions} options={freezerOptions} />
            <br></br>
            <Select defaultValue={drawerOptions} options={drawerOptions} />
            <br></br>
            <Select defaultValue={madeOptions} options={madeOptions} />
            <br></br>

            <div className="wrapper">
              {/* heres been the className wrapper */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <br></br>
          </div>
        </Fragment>
      </div>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: grey;
            font-size: 20px;
          }
          input {
            width: 100%;
            padding: 10px 20px 10px 10px;
            margin: 8px 0px 10px 0px;
            box-sizing: border-box;
            font-size: 16px;
            border-radius: 4px;
            box-shadow: inset 0 2px 2px #e9e9e9;
            border: 1px solid #aeaeae;
          }
          .dropdown {
            align-items: center;

            top: 50%;
            left: 50%;

            width: 250px;
            height: 50px;
            border: none;
            font-size: 20px;
          }
          select {
            background: green;
            color: #fff;
            padding: 10px;
            width: 250px;
            height: 50px;
            border: none;
            font-size: 20px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
          }

          DatePicker {
            background: green;
            color: #fff;
            padding: 10px;
            width: 250px;
            height: 50px;
            border: none;
            font-size: 20px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
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
