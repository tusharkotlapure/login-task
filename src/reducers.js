import { combineReducers } from 'redux';
import { taskListReducer, taskReducer } from './containers/App/reducer';

export default combineReducers({
    taskList: taskListReducer,
    taskDetail: taskReducer,
});