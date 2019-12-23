import React, {Component} from 'react'
import './App.css'

import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import ajaxReq from './utils/ajax'
import uuid from 'uuid'



class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    try {
      const raw = await fetch('http://localhost:8080/todos')
      const data = await raw.json()
      this.setState({ todos: data })
    } catch (error) {
      console.log(error)
    }
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          ajaxReq(`http://localhost:8080/todos/${id}`, todo, 'put')
        }
        return todo
      })
    })
  }

  delTodo = id => {
    ajaxReq(`http://localhost:8080/todos/${id}`, undefined, 'delete')
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = title => {
    const new_todo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    ajaxReq('http://localhost:8080/todos', new_todo)
    
    this.setState({
      todos: [...this.state.todos, new_todo]
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
