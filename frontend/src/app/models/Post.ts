export interface Post {
    id: number;
    authorId: number;
    pictureUrl: string;
    location?: string;
    likes: number;
    comments: number[];
}

export interface Comment {
    id: number;
    author: number;
    content: string;
    post: number;
}
