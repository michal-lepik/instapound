import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Comment } from './Comment';
import { Post } from './Post';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column()
    profilePicUrl!: string;

    @OneToMany(type => Post, post => post.author)
    posts!: Post[];

    @OneToMany(type => Comment, comment => comment.author)
    comments!: Comment[];
}
