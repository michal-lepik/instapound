import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import * as CommentsActions from '../actions/comments.actions';
import { CommentsService } from '../services/comments.service';

@Injectable()
export class CommentsEffects {
    fetchComments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CommentsActions.fetchCommentsRequested),
            switchMap(() => this.commentsService.getComments().pipe(take(1))),
            map(comments => CommentsActions.fetchCommentsSucceeded({ payload: comments })),
            catchError(() => of(CommentsActions.fetchCommentsFailed)),
        ),
    );

    constructor(private readonly actions$: Actions, private readonly commentsService: CommentsService) {}
}
