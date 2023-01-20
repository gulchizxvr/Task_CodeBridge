import {axiosService, AxiosRes} from "./axios.service";
import {IArticle} from "../interface/response.interface";
import {baseURL, urls} from "../configs";



const articleService = {
    getAllArticle: ():AxiosRes<IArticle[]> => axiosService.get(baseURL+urls.all,{params:{language:"en",pageSize:21}}),
    searchArticles: (value:any):AxiosRes<IArticle[]> => axiosService.get(baseURL+"/everything", {params:{q:value,searchIn:"title,description"}})

}

export {articleService}
