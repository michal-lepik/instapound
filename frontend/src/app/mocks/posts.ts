/* spell-checker: disable */
import { Post } from '../modules/posts/models/post.model';

export const posts: Post[] = [
    {
        id: 2,
        authorId: 2,
        pictureUrl: 'https://picsum.photos/600/',
        location: 'Worst city in the world',
        likes: 1532,
    },

    {
        id: 4,
        authorId: 4,
        pictureUrl: 'https://picsum.photos/602/',
        location: 'Sweet Home Alabama',
        likes: 945,
    },
    {
        id: 5,
        authorId: 5,
        pictureUrl: 'https://picsum.photos/603/',
        location: 'Really nice place',
        likes: 140,
    },
    {
        id: 3,
        authorId: 3,
        pictureUrl: 'https://picsum.photos/601/',
        location: null,
        likes: 9,
    },
];
