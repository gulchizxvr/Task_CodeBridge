import {axiosService, AxiosRes} from "./axios.service";
import {IArticles} from "../interface";
import {baseURL, urls} from "../configs";



const articleService = {
    getAllArticle: ():AxiosRes<IArticles> => axiosService.get(baseURL+urls.all,{params:{pageSize:21,apiKey:"54c8e5fa4d104f2f9ea178a688c8f6ea"}}),
    searchArticles: (value:string):AxiosRes<IArticles> => axiosService.get(baseURL+"/everything", {params:{q:value,searchIn:"title,description"}})

}

export {articleService}

