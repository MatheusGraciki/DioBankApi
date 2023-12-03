import { UserService } from './../services/UserService';
import { Request, Response } from 'express';

export class UserController {
    userService: UserService;

    constructor(userService: UserService){
        this.userService = new UserService;
    }
    createUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const user = req.body;

        if (!user.name) {
            return res.status(400).json({ message: 'Bad request! Nome obrigatório' });
        }
        this.userService.createUser(user.name, user.email);

        return res.status(201).json({
            message: 'Account created',
        });
    };

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers();
        return res.status(201).json({ users });
    };
}
