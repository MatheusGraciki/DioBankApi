import express, {Request, Response} from "express";

const server = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) =>{
    return res.status(200).json({ message: 'Did you mean nuddles?'});
})

server.post('/user', (req: Request, res: Response) => {
    const body = req.body
    console.log(body)
    return res.status(200).json({ message:'Your account has been created successfully'})
})

server.listen(5000, () => console.log('Server on'));
