import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    Todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.Todos)
    return (
      <div className="App">
        <Todos todos ={this.state.todos} />
      </div>
    );
  }
}
export default App;
