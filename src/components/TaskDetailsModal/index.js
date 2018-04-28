import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

class TaskDetails extends React.Component {

	handleDateTiimeChange = (taskEnd) => this.props.setTaskValues('taskEnd', taskEnd);

	onChange = (e) => {
		const { name, value } = e.target;
		this.props.setTaskValues(name, value);
	}

	render() {
		const {
			isEdit,
			toggle,
			onSubmit,
			isVisible,
		} = this.props;

		const {
			itemData
		} = this.props;

		return (
			<Modal isOpen={isVisible} toggle={toggle} size="md">
            	<ModalHeader toggle={toggle} className="text-center">{isEdit ? 'Update Task': 'Create Task'}</ModalHeader>
            	<ModalBody>
            		<Form>
				        <FormGroup>
				          <Label for="exampleEmail">Task Name</Label>
				          <Input type="text" value={itemData.name} onChange={this.onChange} name="name" id="exampleEmail" placeholder="Task Name" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="examplePassword">Task End</Label>
				          <DatePicker
							    selected={itemData.taskEnd}
							    onChange={this.handleDateTiimeChange}
							    showTimeSelect
							    timeFormat="HH:mm"
							    timeIntervals={30}
							    dateFormat="LLL"
							    timeCaption="Time"
							/>
				        </FormGroup>
				        <FormGroup>
				          <Label for="exampleSelect">Task Status</Label>
				          <Input onChange={this.onChange} type="select" value={itemData.status} name="status" id="exampleSelect">
				            <option value="assigned">Assigned</option>
				            <option value="complete">Complete</option>
				            <option value="pending">Pending</option>
				          </Input>
				        </FormGroup>
				        <FormGroup>
				          <Label for="exampleText">Task Description</Label>
				          <Input type="textarea" value={itemData.description} name="description" onChange={this.onChange} id="exampleText" />
				        </FormGroup>
				       </Form>
            	</ModalBody>
                <ModalFooter>
                	<Button color="danger" onClick={toggle}>Cancel</Button>
                	<Button color="success" onClick={() => onSubmit(itemData, isEdit)}>Submit</Button>
                </ModalFooter>            
        	</Modal>
		);
	}
}

TaskDetails.propTypes = {
	isEdit: PropTypes.bool.isRequired,
	itemData: PropTypes.object,
	onSubmit: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
}

export default TaskDetails;
