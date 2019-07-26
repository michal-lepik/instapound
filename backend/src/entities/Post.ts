import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { Comment } from './Comment';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    pictureUrl!: string;

    @Column({ nullable: true })
    location!: string;

    @Column()
    likes!: number;

    @OneToMany(type => Comment, comment => comment.post)
    comments!: Comment[];

    @Column()
    authorId!: number;
    @ManyToOne(type => User, user => user.posts)
    @JoinColumn({ name: 'authorId' })
    author!: User;
}
