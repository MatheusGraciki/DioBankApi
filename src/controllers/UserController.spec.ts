import { UserService } from '../services/UserService';
import { UserController } from './UserController';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
    };
    const userController = new UserController(mockUserService as UserService);

    it('should add a new user', () => {
        const mockRequest = {
            body: {
                name: 'test',
                email: 'test@example.com',
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: 'Account created' });
    });

    it('should return an error if the user did not enter the name', () => {
        const mockRequest = {
            body: {
                email: 'test@example.com',
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Nome obrigatório' });
    });
});
