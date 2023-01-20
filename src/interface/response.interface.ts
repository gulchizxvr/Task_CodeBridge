export interface IArticle {
    status: string
    totalResults: number
    articles: [
        {
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
        }]
}



