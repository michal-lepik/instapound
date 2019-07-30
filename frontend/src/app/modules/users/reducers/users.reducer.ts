import { Action, createReducer, on } from '@ngrx/store';

import * as UsersActions from '../actions/users.actions';
import { User } from '../models/user.model';

export interface State {
    users: User[];
    isFetching: boolean;
}

export const initialState: State = {
    users: [],
    isFetching: false,
};

const usersReducer = createReducer(
    initialState,
    on(UsersActions.fetchUsersRequested, state => ({ ...state, isFetching: true })),
    on(UsersActions.fetchUsersSucceeded, (state, { payload }) => ({
        users: payload,
        isFetching: false,
    })),
    on(UsersActions.fetchUsersFailed, state => ({ ...state, isFetching: false })),
);

export const reducer = (state: State | undefined, action: Action) => usersReducer(state, action);
