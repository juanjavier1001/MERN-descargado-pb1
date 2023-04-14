import express from 'express';
import { port } from './config.js';
import { pool } from './db.js';
import { router } from './routes/task.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/getTask', async (req, res) => {
	try {
		const [result] = await pool.query('select 10 as result 	');
		console.log(result);
		res.send('conexion a la db');
	} catch (error) {
		console.log('error al conectar', error);
		res.send('error');
	}
});

/* app.get('/getTask', async (req, res) => {
	const [result] = await pool.query(
		'insert into task(id,titulo,texto) values("","factura","comprar factura") '
	);
	console.log(result);
	res.json('hola');
}); */

/* app.get('/tareas', async (req, res) => {
	const [result] = await pool.query('SELECT * from task  ');
	console.log(result[0]);
	//result.map((e) => {
		//console.log(e);
	//});
	res.json('tareas');
}); */

app.listen(port, () => console.log('server on ...'));
