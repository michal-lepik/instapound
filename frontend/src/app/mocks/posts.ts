import { Post } from '../models/Post';

export const posts: Post[] = [
    {
        id: 2,
        authorId: 2,
        pictureUrl: 'https://picsum.photos/600/',
        location: 'Worst city in the world',
        likes: 1532,
        comments: [1, 2],
    },
    {
        id: 3,
        authorId: 3,
        pictureUrl: 'https://picsum.photos/601/',
        likes: 9,
        comments: [3, 4],
    },
    {
        id: 4,
        authorId: 4,
        pictureUrl: 'https://picsum.photos/602/',
        location: 'Sweet Home Alabama',
        likes: 945,
        comments: [5],
    },
    {
        id: 5,
        authorId: 5,
        pictureUrl: 'https://picsum.photos/603/',
        location: 'Really nice place',
        likes: 140,
        comments: [6, 7],
    },
];
