import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/CreateTaskForm';
import React from "react";
import Axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskTitle: '',
      taskDescription: '',
    };

    this.getTasks = this.getTasks.bind(this);
    this.createTask = this.createTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.clearDB = this.clearDB.bind(this);
    this.setState = this.setState.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Fetching the list of Tasks upon load. 
  componentDidMount() {
    this.getTasks()
  }

  // Sync state with the current values of input forms
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  // Fetches all of the tasks currently in the DB. Called to refetch after every operation below. 
  getTasks() {
    Axios.get('http://127.0.0.1:5000/tasks')
    .then(response => {
      let tasks = response.data
      this.setState({
        tasks: tasks
      })
    })
    .catch(error => console.error(error))
  }

  // Sends a POST request to create a task
  createTask(title, description) {
    Axios.post('http://127.0.0.1:5000/tasks', {
      title: title,
      description: description
    })
    .then(() => {
      this.getTasks()
    })
    .catch(error => console.error(error))
  }

  // Updates a task status (incomplete, complete)
  changeTaskStatus(id, isCompleted) {
    Axios.put(`http://127.0.0.1:5000/tasks/${id}`, {
      completed: isCompleted ? 1 : 0
    })
    .then(() => {
      this.getTasks()
    })
    .catch(error => console.error(error))
  }

  // Deletes a task by id
  deleteTask(id) {
    Axios.delete(`http://127.0.0.1:5000/tasks/${id}`)
    .then(() => {
      this.getTasks()
    })
    .catch(error => console.error(error))
  }

  // Clears all of the stored tasks
  clearDB() {
    Axios.delete('http://127.0.0.1:5000/cleardb')
    .then(() => {
      this.getTasks()
    })
    .catch(error => console.error(error))
  }
  
  render() {
    return (
      <div className="App">
        <h1 class="display-1 text-center">Jay's Simple Task List</h1>
          <div className="container-fluid">
            <div class="row">
              <TaskForm createTask={this.createTask}/>
            </div>
            <div class="row">
              <TaskList changeTaskStatus={this.changeTaskStatus} deleteTask={this.deleteTask} tasks={this.state.tasks}/>
            </div>
          </div>
        <div className="row justify-content-center">
          <button className="col-md-2" onClick={this.clearDB}>Clear Task List</button>
        </div>
      </div>
    );
  }
}

export default App;
