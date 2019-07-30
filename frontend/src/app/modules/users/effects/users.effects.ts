import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import * as UsersActions from '../actions/users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
    fetchUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.fetchUsersRequested),
            switchMap(() => this.usersService.getUsers().pipe(take(1))),
            map(users => UsersActions.fetchUsersSucceeded({ payload: users })),
            catchError(() => of(UsersActions.fetchUsersFailed)),
        ),
    );

    constructor(private readonly actions$: Actions, private readonly usersService: UsersService) {}
}
