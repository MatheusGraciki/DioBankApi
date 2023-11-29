import { UserService } from "./UserService";

describe('UserService', () => {
    const userService = new UserService();

    it('should create a new user', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('testname', 'test@test.com')
        expect(mockConsole).toHaveBeenCalled()
    })
})