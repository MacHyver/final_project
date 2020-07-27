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
      <div className="background">
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
            .background {
              background-color: snowwhite;

              justify-content: center;
              align-items: center;
            }
            .Bottom {
              display: flex;
              color: white;
              text-shadow: 1px 1px black;
              font-size: 20px;
              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: #51dcfa4f;
              margin: 15px 10px 2px 120px;
              padding: 6px 50px 5px 50px;
              border-color: whitesmoke;
              width: 300px;
              height: 45px;
              max-width: 300px;
            }
            .Button {
              font-size: 20px;
              color: white;
              text-shadow: 1px 1px black;
              border-style: solid;
              border-color: white;
              border-width: 3px;
              border-radius: 5px;
              background-color: #51dcfa4f;
              display: inline-block;
              border-style: outset;
              border-color: whitesmoke;
              padding: 5px;
              margin: 15px -65px 15px 120px;
            }
            // {* comment: hier ist die Hintergrundfarbe *}
          `}
        </style>
      </div>
    );
  }
}
