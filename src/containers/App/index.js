import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { AppTitle } from '../../components/AppTitle';
import TaskList from '../../components/TaskList';
import './App.css';

class App extends Component {
  state = {
    taskList: [
      {
        id: 1,
        name: "Task 1",
        taskEnd: "ttttt",
        taskDetails: "test test test test",
        taskStatus: "Assigned"
      },
      {
        id: 2,
        name: "Task 2",
        taskEnd: "ttttt",
        taskDetails: "test test test test",
        taskStatus: "Assigned"
      },
      {
        id: 3,
        name: "Task 3",
        taskEnd: "ttttt",
        taskDetails: "test test test test",
        taskStatus: "Assigned"
      },
      {
        id: 4,
        name: "Task 4",
        taskEnd: "ttttt",
        taskDetails: "test test test test",
        taskStatus: "Assigned"
      }
    ]
  }

  onEdit = () => {

  };

  onDelete = () => {

  };

  render() {
    return (
      <Row className="container-fluid">
        <Col xs={12}>
          <AppTitle
            title="Task Manager App"
            titleClass="text-center my-2" 
          />
          <TaskList
            itemList={this.state.taskList}
            onDelete={this.onDelete}
            onEdit={this.onEdit} 
          />
        </Col>
      </Row>
    );
  }
}

export default App;
