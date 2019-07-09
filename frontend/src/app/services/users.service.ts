import { Injectable } from '@angular/core';

import { users } from '../mocks/users';

@Injectable({
    providedIn: 'root',
})
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
