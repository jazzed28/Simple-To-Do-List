import React, { Component } from 'react';
import Title from './title';
import TodoForm from './todoform';
import TodoList from './todolist';

class App extends Component {
  constructor(props) {
    super(props);

    const introData = [
			{
				id: -3,
				value: "Hi! This is a simple to do list app made by REACT"
			},
			{
				id: -2,
				value: "Hover over todos and click on `x` to delete them"
			},
			{
				id: -1,
				value: "Add new todos and come back later, I will save them for you"
			}
		];

    const localData = localStorage.todos && JSON.parse(localStorage.todos);

    this.state = {
      data: localData || introData
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  updateLocalStorage() {
    if(typeof(Storage) !== "undefined")
      localStorage.todos = JSON.stringify(this.state.data);
  }

  addTodo(val) {
    let id;

    if (typeof(Storage) !== "undefine") {
      id = Number(localStorage.count);
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      id = window.id++;
    }

    const todo = {
      value: val,
      id: id
    };

    this.state.data.push(todo);

    this.setState({
      data: this.state.data
    }, () => {
      this.updateLocalStorage();
    });
  }

  removeTodo(id) {
    const list = this.state.data.filter(todo => {
      if (todo.id !== id)
        return todo;
    });

    this.setState({
      data: list
    }, () => {
      this.updateLocalStorage();
    })
  }

  componentDidMount() {
    localStorage.clear();
    if (typeof(Storage) !== "undefined") {
      if (!localStorage.todos) {
        localStorage.todos = JSON.stringify(this.state.data);
      }
      if (!localStorage.count) {
        localStorage.count = 0;
      }
    } else {
      console.log("%cApp will not remember todos created as LocalStorage Is Not Available",
                  "color: hotpink; background: #333; font-size: x-large; font-family: Courier;");
      window.id = 0;
    }
  }

  render() {
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.data}
          remove={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
