import React, { Component } from "react";
import { v4 } from "uuid";
import Title from "./Title.js";
import Task from "./Task.js";
import Form from "./Form.js";
import Filter from "./Filter.js";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      tasks: JSON.parse(localStorage.getItem("tasks")) || [
        {
          id: v4(),
          description: "Do Homework",
          isStarred: false,
          isCompleted: false,
        },
        {
          id: v4(),
          description: "Do the dishes",
          isStarred: false,
          isCompleted: false,
        },
      ],
    };
  }

  //Change the filter state
  changeFilter = (e) => {
    e.preventDefault();
    const filter = document.querySelector("#filter").value;
    this.setState({ filter });
  };

  // Adds the task into the state array
  addingTask = (e) => {
    e.preventDefault();
    const text = document.querySelector(".taskText").value;
    const newTasks = [
      ...this.state.tasks,
      { id: v4(), description: text, isStarred: false, isCompleted: false },
    ];
    //Add the tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    //Update the state
    this.setState({
      tasks: newTasks,
    });
  };

  //Toggle the particular task's isCompleted state
  toggleCompletion = (id) => {
    const { tasks } = this.state;
    const newState = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : { ...task };
    });

    localStorage.setItem("tasks", JSON.stringify(newState));
    this.setState({ tasks: newState });
  };

  //Toggle this particular task's isStarred state
  toggleStarred = (id) => {
    const { tasks } = this.state;
    const newState = tasks.map((task) => {
      return task.id === id
        ? { ...task, isStarred: !task.isStarred }
        : { ...task };
    });

    localStorage.setItem("tasks", JSON.stringify(newState));
    this.setState({ tasks: newState });
  };

  //Delete this task from this state
  deleteTask = (id) => {
    const { tasks } = this.state;
    const newTask = tasks.filter((task) => task.id !== id);

    //Update the localStorage and update the state
    localStorage.setItem("tasks", JSON.stringify(newTask));
    this.setState({ tasks: newTask });
  };

  //Display the particular tasks that are in accordance with the <filter> from the state
  displayTask = () => {
    const { tasks, filter } = this.state;
    let toDisplay;
    if (filter === "All") {
      toDisplay = tasks;
    } else if (filter === "Starred") {
      toDisplay = tasks.filter((task) => task.isStarred === true);
    } else {
      toDisplay = tasks.filter((task) => task.isCompleted === true);
    }

    return toDisplay.map((task) => (
      <Task
        key={task.id}
        {...task}
        toggleCompletion={this.toggleCompletion}
        toggleStarred={this.toggleStarred}
        deleteTask={this.deleteTask}
      />
    ));
  };

  render() {
    return (
      <div className="content-container">
        <Title />
        <Form addingTask={this.addingTask} />
        <Filter changeFilter={this.changeFilter} />
        <div className="task-container">{this.displayTask()}</div>
      </div>
    );
  }
}

export default Todo;
