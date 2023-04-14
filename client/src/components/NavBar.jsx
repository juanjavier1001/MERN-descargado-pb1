import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<h1>React MySQL</h1>
			<nav>
				<ul>
					<li>
						<Link className="text-decoration-none" to="/">
							Task Page
						</Link>
					</li>
					<li>
						<Link className="text-decoration-none" to="/new">
							Task Form
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
