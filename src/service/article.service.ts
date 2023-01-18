import {axiosService, AxiosRes} from "./axios.service";
import {IArticle} from "../interface/response.interface";

const urls = {
    getSearch:""
}

const articleService = {
    getAllArticle: ():AxiosRes<IArticle[]> => axiosService.get('/v3/articles'),
    searchArticles: (value:any):AxiosRes<IArticle[]> => axiosService.get(`/v3/articles/`, {params:{contains:value}})

}

export {articleService}
