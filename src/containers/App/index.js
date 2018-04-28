
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { AppTitle } from '../../components/AppTitle';
import TaskList from '../../components/TaskList';
import TaskDetails from '../../components/TaskDetailsModal';
import If from '../../components/If';
import * as actions from './actions';
import './App.css';

class App extends Component {
  state = {
    showTaskModal: false,
    editMode: false,
  }

  onEdit = (id) => {
    this.props.setPrefillTaskData(this.props.taskList.find(data => data.id === id));
    this.setState({ editMode: true, showTaskModal: true });
  }

  onDelete = (id) => this.props.updateTaskList(this.props.taskList.filter(task => task.id !== id ));

  toggleCreateTask = () => {
    this.props.resetTaskValues();
    this.setState(prevState => ({ showTaskModal: !prevState.showTaskModal, editMode: false }));
  }

  onSubmit = (itemData, isEdit) => {
    const { updateTaskList, taskList, resetTaskValues } = this.props;
    if (!isEdit) {
      updateTaskList(taskList.concat({ ...itemData, id: this.props.taskList.length + 1, }));
      this.setState({
        showTaskModal: false
      });
    } else {
      const updatedTaskList = taskList.map(taskData => {
        if (taskData.id === itemData.id) {
          return itemData;
        }
        return taskData
      });

      updateTaskList(updatedTaskList);
      resetTaskValues();

      this.setState({
        showTaskModal: false,
        editMode: false,
      });
    }
  }

  render() {
    const {
      editMode,
      showTaskModal,
    }=this.state;

    const {
      taskList,
      setTaskValues,
      resetTaskValues,
      taskDetail,
    }=this.props;

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
              resetTaskValues={resetTaskValues}
              setTaskValues={setTaskValues}
              toggle={this.toggleCreateTask}
              itemData={taskDetail}
              isEdit={editMode}
            />
          </If>
          <Button color="primary" onClick={this.toggleCreateTask}>Create Task</Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const {
    taskList: {
      taskList
    },
    taskDetail
  }=state;
  
  return {
    taskList,
    taskDetail,
  };
}
export default connect(mapStateToProps, { ...actions })(App);
