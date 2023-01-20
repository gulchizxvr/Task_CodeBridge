import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {articleService} from "../../service";
import {AxiosError} from "axios";
import {ReactNode} from "react";
import { IArticle } from "../../interface/response.interface";

interface IState {
    articles: IArticle[]
    currentArticle: IArticle | null
}

const initialState: IState = {
    articles: [],
    currentArticle: null
}


const getAllArticle = createAsyncThunk<IArticle[], void>(
    'articleSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await articleService.getAllArticle()
            console.log(data);
            const directory = data.articles
            console.log(directory);
            return directory
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const searchArticles = createAsyncThunk<IArticle[], void>(
    'articleSlice/searchArticles',
    async (value, {rejectWithValue}) => {
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
    reducers: {
        selectArticle: (state, action) => {
            state.currentArticle = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllArticle.fulfilled, (state, action) => {
                state.articles = action.payload
            })
            .addCase(searchArticles.fulfilled, (state, action) => {
                state.articles = action.payload
            })

})

const {reducer: articleReducer, actions: {selectArticle}} = articleSlice

const articleActions = {
    getAllArticle,
    selectArticle,
    searchArticles
}

export {articleActions, articleReducer}