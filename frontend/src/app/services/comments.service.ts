import { Injectable } from '@angular/core';

import { comments } from '../mocks/comments';

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    getComments() {
        return comments;
    }

    getCommentById(id: number) {
        return comments.find(user => user.id === id);
    }
}
