export interface User {
    name: string;
    email: string;
}
const db = [
    {
        name: 'Joana',
        email: 'joana@gmail.com',
    },
    {
        name: 'Joana1',
        email: 'joana1@gmail.com',
    },
];
export class UserService {
    db: User[];

    constructor(database = db) {
        this.db = database;
    }
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email,
        };

        this.db.push(user);
        console.log(this.db);
    };

    getAllUsers = () => {
        return this.db;
    };

    deleteUser = (name: string, email: string) => {
        const userToDelete: User = {
            name: name,
            email: email,
        };
        const indexToDelete = this.db.findIndex((user) => user.name === userToDelete.name && user.email === userToDelete.email);

        if (indexToDelete !== -1) {
            this.db.splice(indexToDelete, 1);
            console.log(this.db);
            return true;
        }
        
        console.log(this.db);

        return false;
    };
}
