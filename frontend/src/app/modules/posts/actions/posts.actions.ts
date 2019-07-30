import { createAction, props } from '@ngrx/store';

import { Post } from '../models/post.model';

export const fetchPostsRequested = createAction('[] Fetch Posts Requested');
export const fetchPostsSucceeded = createAction(
    '[Posts API] Fetch Posts Succeeded',
    props<{ payload: Post[] }>(),
);
export const fetchPostsFailed = createAction('[Posts API] Fetch Posts Failed');
