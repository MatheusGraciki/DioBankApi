import { User, UserService } from './UserService';

describe('UserService', () => {
    const mockDb: User[] = [];
    const userService = new UserService(mockDb);

    it('should create a new user', () => {
        const initialLength = userService.getAllUsers().length;

        console.log('Database before creating user:', userService.getAllUsers());
        userService.createUser('testname', 'test@test.com');
        console.log('Database after creating user:', userService.getAllUsers());

        const updatedLength = userService.getAllUsers().length;
        expect(updatedLength).toBe(initialLength + 1);
    });

    it('should delete a user', () => {
        const userToDelete = {
            name: 'Joana',
            email: 'joana@gmail.com',
        };

        console.log('Database before deletion:', userService.getAllUsers());
        userService.deleteUser(userToDelete.name, userToDelete.email);
        console.log('Database after deletion:', userService.getAllUsers());

        const usersAfterDeletion = userService.getAllUsers();
        expect(usersAfterDeletion).not.toContainEqual(userToDelete);
    });
});
