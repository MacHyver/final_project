import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { render } from 'react-dom';
import Style from '../pages/_app.js';

export default class Shoppinglist extends React.Component {
  state = {
    text: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div className="container">
        <Head>
          <title>FMS</title>
          <link rel="icon" href="/snowplus.ico" />
        </Head>
        <Header />
        <main>
          <h1 className="title">
            <br></br>Shoppinglist Creator
          </h1>

          <form onSubmit={this.handleSubmit}>
            <input
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Add something!"
            />
            <img
              onClick={this.handleSubmit}
              src="/image/snowplusfree.png"
              alt="add item to shoppinglist"
            ></img>
          </form>
        </main>
        <style jsx>
          {`
            .title {
              font-size: 65px;
              margin-top: -10px;
              text-align: center;
              color: white;
              text-shadow: 3px 3px #858383d9;
            }

            input {
              width: 300px;
              height: 45px;
              color: black;
              font-size: 20px;
              justify-content: center;
              align-items: center;

              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: white;
              margin: 30px 10px 2px 120px;
              padding: 5px 10px 5px 10px;
              border-color: whitesmoke;
            }
            img {
              width: 42px;
              height: 42px;
              border-style: outset;
              border-color: whitesmoke;
              padding: 5px;
              margin: 10px 10px -14px 5px;
            }
          `}
        </style>
      </div>
    );
  }
}
