import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import TaskForm from './pages/TaskForm';
import TaskPage from './pages/TaskPage';

const App = () => {
	return (
		<>
			<div className="container">
				<NavBar />
				<Routes>
					<Route path="/" element={<TaskPage />} />
					<Route path="/new" element={<TaskForm />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
