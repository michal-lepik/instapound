import { createAction, props } from '@ngrx/store';

import { Comment } from '../models/comment.model';

export const fetchCommentsRequested = createAction('[] Fetch Comments Requested');
export const fetchCommentsSucceeded = createAction(
    '[Comments API] Fetch Comments Succeeded',
    props<{ payload: Comment[] }>(),
);
export const fetchCommentsFailed = createAction('[Comments API] Fetch Comments Failed');
