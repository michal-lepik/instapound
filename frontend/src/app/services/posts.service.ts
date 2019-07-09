import { Injectable } from '@angular/core';

import { posts } from '../mocks/posts';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    getPosts() {
        return posts;
    }
}
