import {IResponse} from "./response.interface";

export interface IArticles extends IResponse {
    articles: IArticle[]
}

export interface IArticle {
    source: {
        id: string,
        name: string
    }
    author: string | null
    title: string
    url: string
    urlToImage: string
    publishedAt: Date
    content: string
    description: string
}