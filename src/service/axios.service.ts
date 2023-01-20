import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { baseURL } from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>



const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config) => {
    const access = "54c8e5fa4d104f2f9ea178a688c8f6ea";
    const {headers} = config
    // @ts-ignore
    headers.Authorization = `Bearer ${access}`
    return config
})



export {axiosService}
