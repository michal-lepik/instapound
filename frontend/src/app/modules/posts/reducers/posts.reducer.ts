import { Action, createReducer, on } from '@ngrx/store';

import * as PostsActions from '../actions/posts.actions';
import { Post } from '../models/post.model';

export interface State {
    posts: Post[];
    isFetching: boolean;
}

export const initialState: State = {
    posts: [],
    isFetching: false,
};

const postsReducer = createReducer(
    initialState,
    on(PostsActions.fetchPostsRequested, state => ({ ...state, isFetching: true })),
    on(PostsActions.fetchPostsSucceeded, (state, { payload }) => ({
        posts: payload,
        isFetching: false,
    })),
    on(PostsActions.fetchPostsFailed, state => ({ ...state, isFetching: false })),
);

export const reducer = (state: State | undefined, action: Action) => postsReducer(state, action);
