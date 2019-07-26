import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Post } from './Post';
import { User } from './User';

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    authorId: number;
    @ManyToOne(type => User, user => user.comments)
    @JoinColumn()
    author: User;

    @Column()
    postId: number;
    @ManyToOne(type => Post, post => post.comments)
    @JoinColumn()
    post: Post[];
}
