import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleNewTodoAddition() {
    if (this.input.value !== '') {
      this.props.addTodo(this.input.value);
      this.setState({
        value: ''
      });
      this.input.placeholder = "Add todo here...";
    }
  }

  render() {
    const classes = `btn btn-secondary`;
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Add todo here..."
          ref={node => {
            this.input = node;
          }}
          value={this.state.value}
          placeholder="Add todo here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            type={classes}
            onClick={this.handleNewTodoAddition}
          > + </button>
        </span>
      </div>
    );
  }
}

export default TodoForm;
