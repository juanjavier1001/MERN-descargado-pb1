import { useEffect, useState } from 'react';
import { getTaskRequest } from '../api/task.api';
import TaskCard from '../components/TaskCard';
import TaskForm from './TaskForm';

const TaskPage = () => {
	const [task, changeTask] = useState([]);

	useEffect(() => {
		console.log('hola pa');
		console.log('task', task);
		const getTaskP = async () => {
			const result = await getTaskRequest();
			changeTask(result.data);
			//console.log(result.data);
			//console.log('task', task);
		};

		getTaskP();
		console.log(task);
	}, []);

	return (
		<>
			<h1>Tasks</h1>
			<ul>
				<TaskCard task={task} key={task.id} />
				{/* {task.map((e, i) => {
					return (
						<li className="mb-2" key={e.id}>
							titulo : {e.title} ------ description : {e.description}
							<button type="button" class="btn btn-primary ms-1 me-1">
								editar
							</button>
							<button type="button" class="btn btn-primary">
								eliminar
							</button>
						</li>
					);
				})} */}
			</ul>
		</>
	);
};

export default TaskPage;
