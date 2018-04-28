import React from 'react';
import TaskItem from '../TaskItem';
import PropTypes from 'prop-types';

const TaskList = ({itemList, onEdit, onDelete}) =>
	itemList.map(itemData => (
		<TaskItem
			key={itemData.id}
			onEdit={onEdit}
			itemData={itemData}
			onDelete={onDelete}
		/>
	));

TaskList.propTypes = {
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	itemList: PropTypes.array.isRequired,
};

export default TaskList;
