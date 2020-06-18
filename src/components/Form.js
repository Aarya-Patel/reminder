import React, { Component } from "react";
import { ReactComponent as Toggle } from "../assests/toggle.svg";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  expandCollapse = () => {
    let collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { addingTask } = this.props;
    return (
      <form className="add-todo" onSubmit={addingTask}>
        <Toggle className="toggle" onClick={this.expandCollapse} />
        {collapsed ? (
          <input type="text" className="taskText" placeholder="Add a task" />
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default Form;
