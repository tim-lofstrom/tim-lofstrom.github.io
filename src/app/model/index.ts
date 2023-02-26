import { Page } from "./page";
import { Post } from "./post";

export interface Index {
    pages: Page[],
    posts: Post[]
}