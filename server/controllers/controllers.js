import { pool } from '../db.js';

const getTasks = async (req, res) => {
	try {
		const [result] = await pool.query('select * from tasks');
		console.log(result);
		res.send(result);
	} catch (error) {
		res.json({ 'messaje ': 'error' });
		console.log('error papa');
	}
};
const getTask = async (req, res) => {
	try {
		const { id } = req.params;
		const [result] = await pool.query('select * from tasks where id = ?', [id]);
		//console.log(id);
		//console.log(result);
		/* if (result.lenght < 0) {
			res.send(`no hay ningun dato con el id  `);
		} */
		//console.log(result.length);
		if (result.length <= 0) {
			return res
				.status(404)
				.json({ mensaje: `no hay ninguna tarea con el id ${id}` });
		}
		res.json(result[0]);
	} catch (error) {
		console.log('error papa', error);
		res.json({ messaje: 'error' });
	}
};
const createTask = async (req, res) => {
	const { title, description } = req.body;
	console.log(title);
	console.log(description);
	const [result] = await pool.query(
		'insert into tasks(title,description) values(?,?) ',
		[title, description]
	);

	console.log(result);
	res.json({ id: result.insertId, title, description });
};
const updateTask = async (req, res) => {
	try {
		const { title, description } = req.body;
		const { id } = req.params;
		console.log(title, description);
		const [result] = await pool.query(
			'update tasks set title = ? , description = ? where id = ?',
			[title, description, id]
		);
		console.log(result);
		res.send('actualizar tarea');
	} catch (error) {
		console.log('error papa', error);
	}
};
const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const [result] = await pool.query('delete from tasks where id = ?', [id]);
		console.log(result);

		if (result.affectedRows === 0) {
			return res.status(404).json({ messaje: 'tarea not found' });
		}
		return res.sendStatus(204);
		//res.json({ menssaje: ` tarea con el id ${id} borrada ` });
	} catch (error) {
		return res.status(500).json({ messaje: 'error de conexion' });
	}
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
