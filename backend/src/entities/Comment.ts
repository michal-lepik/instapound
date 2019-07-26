import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Post } from './Post';
import { User } from './User';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @Column()
    authorId!: number;
    @ManyToOne(type => User, user => user.comments)
    @JoinColumn({ name: 'authorId' })
    author!: User;

    @Column()
    postId!: number;
    @ManyToOne(type => Post, post => post.comments)
    @JoinColumn({ name: 'postId' })
    post!: Post[];
}
