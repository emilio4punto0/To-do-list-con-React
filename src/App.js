import React, { Component } from 'react';
import  './App.css';
import {todo} from './todo.json';
import TodoForm from './components/TodoForm'

class App extends Component{

  constructor(){
    super();
    this.state = {
      todo: todo,
    }

  this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todo.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todo: [...this.state.todo, todo]
    })
  }


  render(){
    const todo = this.state.todo.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>
                {todo.title}
              </h3>
              <span className="badge badge-pill badge-danger ml-2">
               {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="App">
          <nav className="nav navbar navbar-dark bg-dark">
            <a href="eslint-disable-next-line" className="text-white">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todo.length}
              </span>
            </a>
          </nav>
          <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todo}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

export default App;
