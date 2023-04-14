//import { deleteTaskRequest } from '../api/task.api';

import { deleteTaskRequest } from '../api/task.api';

const TaskCard = ({ task }) => {
	console.log('props', task);
	//console.log('getTaskP', getTaskP);

	//console.log('change task', changeTask);
	const handleDelete = async (id) => {
		const result = await deleteTaskRequest(id);
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
							</li>
						);
					})}
				</div>
			)}
		</>
	);
};

export default TaskCard;
