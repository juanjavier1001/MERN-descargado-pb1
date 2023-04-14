//import { deleteTaskRequest } from '../api/task.api';

import { useContext } from 'react';
import { deleteTaskRequest } from '../api/task.api';
import { TaskContext } from '../context/TaskContext';

const TaskCard = (/* { task, changeTask } */) => {
	const { task, changeTask } = useContext(TaskContext);
	//console.log('props', task);
	//console.log('change task', changeTask);
	//console.log('getTaskP', getTaskP);

	//console.log('change task', changeTask);

	/* const cambiarTarea = (id) => {
		console.log('hola ' + id);
		changeTask([{ title: 'javito', description: 'uraaaa' }]);
	}; */

	const handleDelete = async (id) => {
		const result = await deleteTaskRequest(id);
		changeTask(
			task.filter((e) => {
				return e.id !== id;
			})
		);
		//console.log('task handle delete', task);
		//changeTask(result)
		//const resultGetTask = await getTaskP();

		console.log(result);
		//console.log(resultGetTask);
	};

	return (
		<>
			{task.length === 0 ? (
				'no hay tareas ...'
			) : (
				<div>
					{task.map((e) => {
						return (
							<li key={e.id} className="mb-2">
								titulo : {e.title} ------ description : {e.description}
								<button type="button" className="btn btn-primary ms-1 me-1">
									editar
								</button>
								<button
									onClick={() => handleDelete(e.id)}
									type="button"
									className="btn btn-primary"
								>
									eliminar
								</button>
								{/* <button
									onClick={() => cambiarTarea(e.id)}
									type="button"
									className=" ms-1 btn btn-primary"
								>
									cambiar tarea
								</button> */}
							</li>
						);
					})}
				</div>
			)}
		</>
	);
};

export default TaskCard;
