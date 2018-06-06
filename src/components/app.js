import React, { Component } from 'react';
import Header from "./header";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: [
              { id: 0, text: "test string 1" },
              { id: 1, text: "test string 2" },
              { id: 2, text: "test string 3" }
          ],
          nextId : 3
      };

      this.addTask = this.addTask.bind(this);
      this.removeTask = this.removeTask.bind(this);

  }

  addTask(taskText) {
      let tasks = this.state.tasks.slice();
      tasks.push(
          {
              id : this.state.nextId,
              text : taskText
          }
      );
      this.setState({
          tasks: tasks,
          nextId: ++this.state.nextId
      });
    }

  removeTask(id) {
      this.setState({
          tasks: this.state.tasks.filter((task, index) => task.id != id)
      })
  }

  render() {
    return (
      <div className = "App">
          <div className = "todo-wrapper">
              <Header />
              <TodoInput todoText = "" addTask={this.addTask}/>
              <ul>
                  {
                      this.state.tasks.map((task) => {
                          return <TodoItem task={task} removeTask={this.removeTask} />
                      })

                  }
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
