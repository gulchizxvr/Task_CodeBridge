import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IArticle} from "../../interface/response.interface";
import {articleService} from "../../service";
import {AxiosError} from "axios";

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
            return data
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
            .addCase(getAllArticle.fulfilled, (state, action)=>{
                state.articles = action.payload
            })

})

const {reducer: articleReducer, actions:{selectArticle}} = articleSlice

const articleActions = {
    getAllArticle,
    selectArticle
}

export {articleActions, articleReducer}