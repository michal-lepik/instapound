import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Post } from './Post';
import { User } from './User';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @ManyToOne(type => User, user => user.comments)
    user!: User;

    @ManyToOne(type => Post, post => post.comments)
    post!: Post[];
}
