import axios,{AxiosResponse} from "axios";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const baseURL = "https://api.spaceflightnewsapi.net"

const axiosService = axios.create({baseURL})


export {axiosService}
