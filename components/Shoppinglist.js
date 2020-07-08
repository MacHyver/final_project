import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
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

        <main>
          <h1 className="title">
            <br></br>Shoppinglist creator
          </h1>

          <p className="description">
            what do you want to put on the shoppinglist?
            {/* <code>pages/index.js</code> */}
          </p>

          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="Form"
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
          </div>
        </main>
        <style jsx>
          {`
            .title {
              font-size: 50px;
              width: 900px;
              display: inline-block;
              justify-content: center;
              align-items: center;
              margin: 5px 50px 10px 10px;
              padding: 5px 50px 5px 30px;
            }
            input {
              width: 300px;
              height: 45px;
              color: black;
              font-size: 20px;
              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: white;
              margin: 15px 10px 2px 50px;
              padding: 5px 10px 5px 10px;
              border-color: whitesmoke;
            }
            img {
              width: 45px;
              height: 45px;
              display: inline-block;
              border-style: outset;
              border-color: whitesmoke;
              padding: 5px;
              margin: 15px 10px 2px 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
