import { Component, OnInit, Input } from '@angular/core';

import { Post, Comment } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
    selector: 'app-post-tile',
    templateUrl: './post-tile.component.html',
    styleUrls: ['./post-tile.component.scss'],
})
export class PostTileComponent implements OnInit {
    @Input() post: Post;

    author: User;
    comments: Comment[];

    iconButtons = [
        'assets/icons/heart.svg',
        'assets/icons/comment.svg',
        'assets/icons/share.svg',
        'assets/icons/bookmark.svg',
    ];

    constructor(private usersService: UsersService, private commentsService: CommentsService) {}

    ngOnInit() {
        this.author = this.usersService.getUserById(this.post.authorId);

        this.comments = this.post.comments.map(commentId =>
            this.commentsService.getCommentById(commentId),
        );
    }
}
