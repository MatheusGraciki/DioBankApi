import express, { Request, Response } from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router)

server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Did you mean nuddles?' });
});

server.listen(5000, () => console.log('Server on'));
