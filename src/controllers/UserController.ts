import { UserService } from './../services/UserService';
import { Request, Response } from 'express';

export class UserController {
    userService: UserService;

    constructor(userService?: UserService) {
        this.userService = userService || new UserService();
    }

    createUser = (req: Request, res: Response) => {
        const user = req.body;

        if (!user.name) {
            return res.status(400).json({ message: 'Bad request! Nome obrigatório' });
        } else if (!user.email) {
            return res.status(400).json({ message: 'Bad request! Email obrigatório' });
        }
        this.userService.createUser(user.name, user.email);

        return res.status(201).json({
            message: 'Account created',
        });
    };

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers();
        return res.status(200).json({ users });
    };

    deleteUser = (req: Request, res: Response) => {
        const  user = req.body
        if(!user.email || !user.name) {
            return res.status(400).json({ message: 'Bad request! Para deletar seu usúario é necessário preencher os campos de email e nome' });
        }
        const UserToDelete = this.userService.deleteUser(user.name, user.email)
        if(!UserToDelete) {
            return res.status(400).json({ message: 'Usuário ão encontrado!'});
        }
        else{
            return res.status(200).json({ message: 'Seu Usuário foi deletado com sucesso!'});
        }
        
        
    };
}
