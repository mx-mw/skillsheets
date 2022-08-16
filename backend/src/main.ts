import fastify, { FastifyRequest } from 'fastify';
import mongoose from 'mongoose';
import { Sheet, ISheet } from './models';
import { config } from 'dotenv';

config();
const port = 8080;

const app = fastify();
mongoose.connect(process.env.MONGO_URI ?? '')
	.then(() => console.log('Connected to mongo'))
	.catch((e) => console.error(e));

app.post('/c', async (req: FastifyRequest<{ Body: ISheet }>, res) => {
	const { _id } = await Sheet.create(req.body);
	res.send(_id);
});

app.get('/:id', async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
	const sheet = await Sheet.findById(req.params.id).exec();
	if (!sheet)
		return res.code(400);

	res.send(sheet);
});

app.listen({
	port: port,
}).then(() => console.log(port));