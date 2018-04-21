import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const TaskItem = ({itemData, onEdit, onDelete}) => (
	<Row className="mb-3">
		<Col xs={8}>{itemData.name}</Col>
		<Col xs={4}>
			<Row>
				<Col xs={6}>
					<Button onClick={() => onEdit(itemData.id)}>Edit</Button>
				</Col>
				<Col xs={6}>
					<Button onClick={() => onDelete(itemData.id)}>Delete</Button>
				</Col>
			</Row>
		</Col>
	</Row>
);

TaskItem.propTypes = {
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	itemData: PropTypes.object.isRequired,
};

export default TaskItem;