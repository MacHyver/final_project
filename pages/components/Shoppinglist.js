import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { render } from 'react-dom';

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
            Welcome to Freezer Food Finder - shoppinglist creator
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
              <button
                className="Button"
                onClick={this.handleSubmit}
                // rel="icon"
                // href="/snowplus.ico"
              >
                click
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
