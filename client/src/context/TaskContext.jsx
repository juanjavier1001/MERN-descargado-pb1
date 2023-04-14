//creamos contexto
import { createContext, useState } from 'react';

const TaskContext = createContext();

const ProviderContext = ({ children }) => {
	const [task, changeTask] = useState([]);

	return (
		<TaskContext.Provider value={{ task, changeTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export { TaskContext, ProviderContext };
