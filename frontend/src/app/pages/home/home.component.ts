import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    posts: Post[];

    constructor(private postsService: PostsService) {}

    ngOnInit() {
        this.posts = this.postsService.getPosts();
    }
}
