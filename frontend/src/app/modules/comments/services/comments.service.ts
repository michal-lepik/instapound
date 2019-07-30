import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from 'src/app/modules/comments/models/comment.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

export class CommentsService {
    constructor(private http: HttpClient) {}

    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${environment.apiUrl}/comments`, httpOptions);
    }

    getCommentById(id: number) {
        return this.http.get<Comment>(`${environment.apiUrl}/comments/${id}`, httpOptions);
    }

    getCommentsByPostId(id: number) {
        return this.http.get<Comment[]>(`${environment.apiUrl}/comments/post/${id}`, httpOptions);
    }
}
