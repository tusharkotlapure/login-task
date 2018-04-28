import * as constants from './constants';

export const updateTaskList = (taskList) => ({
    type: constants.UPDATE_TASK_LIST,
    payload: {
        taskList
    },
});

export const resetTaskList = () => ({
    type: constants.RESET_TASK_LIST,
});

export const setTaskValues = (name, value) => ({
    type: constants.SET_TASK_VALUES,
    payload: {
        name,
        value
    }
});

export const setPrefillTaskData = (payload) => ({
    type: constants.SET_PREFILL_TASK_DATA,
    payload,
});

export const resetTaskValues = (name, value) => ({
    type: constants.RESET_TASK_VALUES,
});
