import { User, UserService } from './UserService';

describe('UserService', () => {
    const mockDb: User[] = [];
    const userService = new UserService(mockDb);

    it('should create a new user', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('testname', 'test@test.com');
        expect(mockConsole).toHaveBeenCalledWith(mockDb);
    });
});
