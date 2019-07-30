import { Action, createReducer, on } from '@ngrx/store';

import * as CommentsActions from '../actions/comments.actions';
import { Comment } from '../models/comment.model';

export interface State {
    comments: Comment[];
    isFetching: boolean;
}

export const initialState: State = {
    comments: [],
    isFetching: false,
};

const commentsReducer = createReducer(
    initialState,
    on(CommentsActions.fetchCommentsRequested, state => ({ ...state, isFetching: true })),
    on(CommentsActions.fetchCommentsSucceeded, (state, { payload }) => ({
        comments: payload,
        isFetching: false,
    })),
    on(CommentsActions.fetchCommentsFailed, state => ({ ...state, isFetching: false })),
);

export const reducer = (state: State | undefined, action: Action) => commentsReducer(state, action);
