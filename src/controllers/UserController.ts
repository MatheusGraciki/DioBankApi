import { UserService } from './../services/UserService';
import { Request, Response } from 'express';

export class UserController {
    createUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const user = req.body;

        if (!user.name) {
            return res.status(400).json({ message: 'Bad request! Nome obrigatório' });
        }
        userService.createUser(user.name, user.email);

        return res.status(200).json({
            message: 'Your account has been created successfully',
        });
    };

    getAllUsers = (req: Request, res: Response) => {
        const userService = new UserService();
        const users = userService.getAllUsers();
        return res.status(200).json({ users });
    };
}
