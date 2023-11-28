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
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email,
        };

        db.push(user);
        console.log(db);
    };

    getAllUsers = () => {
        return db;
    };
}
