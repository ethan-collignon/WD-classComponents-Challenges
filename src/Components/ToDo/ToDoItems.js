import React, { Component } from 'react';

export default class ToDoItems extends Component {
  constructor(props){
      super(props);

      this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item){
    return <li onClick={() => this.delete(item.key)}
    key={item.key}>{item.text}</li>
}

  delete(key) {
      this.props.delete(key);
  }

  render() {
      let toDoList = this.props.entries;
      let listItems = toDoList.map(this.createTasks);

      return (
          <div>
              <br/>
              <h3>Click task to complete</h3>
          <ul className='App'>
              {listItems}
          </ul>
          </div>
      )
  }
};

