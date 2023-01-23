import {axiosService, AxiosRes} from "./axios.service";
import {IArticles} from "../interface";
import {baseURL, urls} from "../configs";



const articleService = {
    getAllArticle: ():AxiosRes<IArticles> => axiosService.get(baseURL+urls.all,{params:{language:"en",pageSize:21}}),
    searchArticles: (value:string):AxiosRes<IArticles> => axiosService.get(baseURL+"/everything", {params:{q:value,searchIn:"title,description"}})

}

export {articleService}

