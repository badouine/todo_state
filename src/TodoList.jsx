import React, { Component } from "react";
import './App.css'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleNewTodoChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos: todos, newTodo: "" });
  };

  handleDelete = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form className="formulaire" onSubmit={this.handleSubmit}>
          <input className="input-text" placeholder="entrer task"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleNewTodoChange}
          />
          <button className="button-add">Add</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo} <button  onClick={() => this.handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
