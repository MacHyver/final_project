import React, { useState } from 'react';
import Shoppinglist from './Shoppinglist';
import Shopping from './Shopping';
import Style from '../pages/_app.js';

export default class Shoppingadd extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all',
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (text) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.text === text) {
          return {
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoToShow = (i) => {
    this.setState({
      todoToShow: i,
    });
  };

  handleDeleteTodo = (text) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.text !== text),
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'open') {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === 'done') {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="Background">
        <img
          src="./image/brandnamenew.png"
          alt="Freezer Food Finder"
          className="brand"
        ></img>
        <Shoppinglist onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Shopping
            toggleComplete={() => this.toggleComplete(todo.text)}
            deleteTodo={() => this.handleDeleteTodo(todo.text)}
            todo={todo}
          />
        ))}
        <div className="Bottom">
          Shopping list items:{' '}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('all')}
          >
            All
          </button>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('open')}
          >
            Missing
          </button>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('done')}
          >
            Done
          </button>
        </div>
        <style jsx>
          {`
            .Bottom {
              display: flex;
              color: black;
              font-size: 20px;
              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: lightskyblue;
              margin: 15px 10px 2px 50px;
              padding: 5px 50px 5px 50px;
              border-color: whitesmoke;
              justify-content: center;
              align-items: center;
              max-width: 300px;
            }
            .Button {
              font-size: 20px;
              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: lightskyblue;
              display: inline-block;
              border-style: outset;
              border-color: whitesmoke;
              padding: 5px;
              margin: 15px 6px 15px 50px;
            }
            // {* comment: hier ist die Hintergrundfarbe *}

            .Background {
              background-color: snowwhite;
              margin: 5px 50px 10px 50px;
              padding: 5px 50px 5px 50px;
            }
          `}
        </style>
      </div>
    );
  }
}
