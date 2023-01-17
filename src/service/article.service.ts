import {axiosService, AxiosRes} from "./axios.service";
import {IArticle} from "../interface/response.interface";



const articleService = {
    getAllArticle: ():AxiosRes<IArticle[]> => axiosService.get('/v3/articles'),
}

export {articleService}
