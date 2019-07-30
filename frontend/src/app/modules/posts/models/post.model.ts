export interface Post {
    id: number;
    authorId: number;
    pictureUrl: string;
    location?: string;
    likes: number;
}
