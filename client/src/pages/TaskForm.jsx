import { useState } from 'react';
import { createTaskRequest } from '../api/task.api';
import TaskPage from './TaskPage';

const TaskForm = () => {
	const [title, changeTitle] = useState('');
	const [description, changedescription] = useState('');

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			if (title === '' || description === '') {
				return console.log('no se puede enviar ,  titulo o description vacios');
			}

			const obj = {
				title,
				description,
			};
			const result = await createTaskRequest(obj);
			changeTitle('');
			changedescription('');
			console.log(result);
		} catch (error) {
			console.log('error papa', error);
		}
	};

	return (
		<>
			<h1>TaskForm</h1>
			<form onSubmit={onSubmit} action="">
				<label htmlFor="title">title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => {
						changeTitle(e.target.value);
					}}
				/>
				<br />
				<br />
				<label htmlFor="description">description</label>
				<textarea
					name="description"
					id="description"
					value={description}
					onChange={(e) => {
						changedescription(e.target.value);
					}}
				></textarea>
				<button type="submit">save</button>
			</form>

			{/* <TaskPage /> */}
		</>
	);
};

export default TaskForm;
