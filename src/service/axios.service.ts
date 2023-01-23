import axios, {AxiosResponse} from "axios";
import { baseURL } from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config) => {
    const access = "54c8e5fa4d104f2f9ea178a688c8f6ea";
    const {headers} = config
    headers!.Authorization = `Bearer ${access}`
    // @ts-ignore
    config!.headers['Access-Control-Allow-Origin'] = '*';
    // @ts-ignore
    config.headers['Access-Control-Allow-Credentials'] = 'true'
    // @ts-ignore
    config.headers['Access-Control-Request-Method'] = 'POST'
    return config
})

export {axiosService}
