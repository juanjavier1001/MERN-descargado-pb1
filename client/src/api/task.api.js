import axios from 'axios';
//recibimos un obj tarea y lo enviamos al backend a travez de axios

const getTaskRequest = async () => {
	return await axios.get('http://localhost:3000/task');
};

const createTaskRequest = async (task) => {
	return await axios.post('http://localhost:3000/task', task);
};

const deleteTaskRequest = async (id) => {
	return await axios.delete(`http://localhost:3000/task/${id}`);
};

export { createTaskRequest, getTaskRequest, deleteTaskRequest };
