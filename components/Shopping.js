import React from 'react';
import Style from '../pages/_app.js';

export default (props) => (
  <div>
    <div style={{ display: 'flex' }}>
      <div
        className="Todostyle"
        style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <img
        onClick={props.deleteTodo}
        src="/image/remove.png"
        alt="clear item from shoppinglist"
        className="iconc"
      ></img>
    </div>
    <style jsx>
      {`
        img {
          width: 45px;
          height: 45px;
          display: inline-block;
          border-style: outset;
          border-color: whitesmoke;
          padding: 5px;
          margin: 15px 10px 2px 4px;
        }
        .Todostyle {
          color: black;
          font-size: 20px;
          border-style: solid;
          border-color: white;
          border-width: 3px;
          border-radius: 5px;
          background-color: white;
          margin: 15px 10px 2px 50px;
          padding: 5px 50px 5px 50px;
          border-color: whitesmoke;
          min-width: 300px;
        }
      `}
    </style>
  </div>
);
