 import {IUrls} from '../interface'

const baseURL = "https://newsapi.org/v2"

const urls:IUrls = {
    all: '/top-headlines?language=en',
    srcReplaceErrorImage: 'https://static.vecteezy.com/system/resources/previews/004/297/967/original/newspaper-roll-line-icon-folded-document-logo-breaking-news-app-simple-logo-press-pages-flat-minimal-style-emblem-daily-news-linear-style-illustration-correspondence-contour-icontype-vector.jpg',
    srcPatternImage: 'https://media.istockphoto.com/id/1345527119/video/graphical-modern-digital-world-news-studio-loop-background.jpg?s=640x640&k=20&c=cr1SYYf7Dix-TgBqiYRLquAmi7TgEE3oZcMUExQ25QY='
}
export {
    baseURL,
  urls
}