import { users } from '../mocks/users';

export class UsersService {
    getUsers() {
        return users;
    }

    getCurrentUser() {
        return users[0];
    }

    getUserById(id: number) {
        return users.find(user => user.id === id);
    }
}
