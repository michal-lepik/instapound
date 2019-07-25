import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import { Comment } from './Comment';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    pictureUrl!: string;

    @Column()
    location!: string;

    @Column()
    likes!: number;

    @OneToMany(type => Comment, comment => comment.post)
    comments!: Comment[];

    @ManyToOne(type => User, user => user.posts)
    author!: User;
}
