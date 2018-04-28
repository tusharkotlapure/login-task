import moment from 'moment';
import * as constants from './constants';

const taskListInitalData = {
    taskList: [],
}

const taskDetailsInitialData = {
    name: '',
    description: '',
    status: 'assigned',
    taskEnd: moment()
}

export const taskListReducer = (state = taskListInitalData, action) => {
    switch (action.type) {
        case constants.UPDATE_TASK_LIST:
            return {
                taskList: action.payload.taskList
            };

        case constants.RESET_TASK_LIST:
            return taskListInitalData;

        default:
            return state;
    }
}

export const taskReducer = (state = taskDetailsInitialData, action) => {
    switch (action.type) {
        case constants.SET_PREFILL_TASK_DATA:
            return {
                ...action.payload
            }

        case constants.SET_TASK_VALUES:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }

        case constants.RESET_TASK_VALUES:
            return taskDetailsInitialData;

        default:
            return state;
    }
}
