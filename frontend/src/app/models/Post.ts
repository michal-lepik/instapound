export interface Post {
    id: number;
    authorId: number;
    pictureUrl: string;
    location?: string;
    likes: number;
}

export interface Comment {
    id: number;
    authorId: number;
    content: string;
    postId: number;
}
