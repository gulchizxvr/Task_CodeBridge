import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {articleService} from "../../service";
import {AxiosError} from "axios";
import {IArticle, IArticles} from "../../interface";

interface IState {
    articles: IArticle[]
    currentArticle: IArticle | null
    loading: boolean,
    error: string | null
}

const initialState: IState = {
    articles: [],
    currentArticle: null,
    loading: false,
    error: null
}


const getAllArticle = createAsyncThunk<IArticle[], void>(
    'articleSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} : {data:IArticles} = await articleService.getAllArticle()
            return data.articles

        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const searchArticles = createAsyncThunk<IArticle[], string>(
    'articleSlice/searchArticles',
    async (value:string, {rejectWithValue}) => {
        try {
            const {data} = await articleService.searchArticles(value)
            return data.articles
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllArticle.fulfilled, (state, action) => {
                state.articles = action.payload
                state.loading = false
            })
            .addCase(getAllArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllArticle.rejected, (state, action)=>{
                state.error = action.payload as string
            })



            .addCase(searchArticles.fulfilled, (state, action) => {
                state.articles = action.payload
                state.loading = false
            })
            .addCase(searchArticles.pending, (state) => {
                state.loading = true
            })
            .addCase(searchArticles.rejected, (state, action)=>{
                state.error = action.payload as string
            })

})

const {reducer: articleReducer} = articleSlice

const articleActions = {
    getAllArticle,
    searchArticles
}

export {articleActions, articleReducer}