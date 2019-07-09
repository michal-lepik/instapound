import { comments } from '../mocks/comments';

export class CommentsService {
    getComments() {
        return comments;
    }

    getCommentById(id: number) {
        return comments.find(user => user.id === id);
    }
}
