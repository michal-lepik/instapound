import { createAction, props } from '@ngrx/store';

import { User } from '../models/user.model';

export const fetchUsersRequested = createAction('[] Fetch Users Requested');
export const fetchUsersSucceeded = createAction(
    '[Users API] Fetch Users Succeeded',
    props<{ payload: User[] }>(),
);
export const fetchUsersFailed = createAction('[Users API] Fetch Users Failed');
