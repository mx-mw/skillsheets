import fastify, { FastifyRequest } from 'fastify';
import mongoose from 'mongoose';
import { Sheet } from './models';
const port = 8080;

const app = fastify();
mongoose.connect(process.env.MONGO_URI ?? '')
	.then(() => console.log('Connected to mongo'))
	.catch((e) => console.error(e));

app.get('/:id', async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
	const sheet = await Sheet.findById(req.params.id);
	if (!sheet)
		return res.code(400);

	res.send(sheet);
});

app.listen({
	port: port,
}).then(() => console.log(port));