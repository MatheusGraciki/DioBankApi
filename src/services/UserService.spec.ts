import { User, UserService } from './UserService';

describe('UserService', () => {
    const mockDb: User[] = [];
    const userService = new UserService(mockDb);

    it('should create a new user', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('testname', 'test@test.com');
        expect(mockConsole).toHaveBeenCalledWith(mockDb);
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
