import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { AppTitle } from '../../components/AppTitle';
import TaskList from '../../components/TaskList';
import TaskDetails from '../../components/TaskDetailsModal';
import If from '../../components/If';

import './App.css';

class App extends Component {
  state = {
    taskList: [],
    showTaskModal: false,
    editTask: null,
    editMode: false,
  }

  onEdit = (id) => this.setState({ editTask: this.state.taskList.find(data => data.id === id ), editMode: true, showTaskModal: true });

  onDelete = (id) => this.setState({ taskList: this.state.taskList.filter(task => task.id !== id )});
  
  toggleCreateTask = () => this.setState(prevState => ({ showTaskModal: !prevState.showTaskModal, editMode: false }));

  onSubmit = (itemData, isEdit) => {
    if (!isEdit) {
      this.setState({ 
        taskList: this.state.taskList.concat({ ...itemData, id: this.state.taskList.length + 1, }),
        showTaskModal: false
      })
    } else {
      const updatedTaskList = this.state.taskList.map(taskData => {
        if (taskData.id === itemData.id) {
          return itemData;
        }
        return taskData
      });

      this.setState({ 
        taskList: updatedTaskList,
        showTaskModal: false,
        editMode: false,
      });
    }
  }

  render() {
    const {
      taskList,
      editMode,
      editTask,
      showTaskModal,
    }=this.state;

    return (
      <Row className="container-fluid">
        <Col xs={12}>
          <AppTitle
            title="Task Manager App"
            titleClass="text-center my-2" 
          />
          <If condition={taskList.length}>
            <TaskList
              itemList={taskList}
              onDelete={this.onDelete}
              onEdit={this.onEdit} 
            />
          </If>
          <If condition={!taskList.length}>
            <p><i>Currently you dont have any task</i></p>
          </If>
          <If condition={showTaskModal}>
            <TaskDetails
              isVisible={showTaskModal}
              onSubmit={this.onSubmit}
              toggle={this.toggleCreateTask}
              itemData={editTask}
              isEdit={editMode}
            />
          </If>
          <Button color="primary" onClick={this.toggleCreateTask}>Create Task</Button>
        </Col>
      </Row>
    );
  }
}

export default App;
