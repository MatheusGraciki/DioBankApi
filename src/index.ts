import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const userController = new UserController();
const server = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Did you mean nuddles?' });
});

server.post('/user', userController.createUser);
server.get('/user', userController.getAllUsers);
server.listen(5000, () => console.log('Server on'));
