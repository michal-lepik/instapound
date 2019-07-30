import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import * as PostsActions from '../actions/posts.actions';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostsEffects {
    fetchPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.fetchPostsRequested),
            switchMap(() => this.postsService.getPosts().pipe(take(1))),
            map(posts => PostsActions.fetchPostsSucceeded({ payload: posts })),
            catchError(() => of(PostsActions.fetchPostsFailed)),
        ),
    );

    constructor(private readonly actions$: Actions, private readonly postsService: PostsService) {}
}
