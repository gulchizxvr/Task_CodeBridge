import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {ArticleCard} from "../../components/ArticleCard/ArticleCard";

const ArticlePage:FC = () => {

    const {articles} = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(articleActions.getAllArticle())
    }, [dispatch])

    return (
        <div>

            {articles ? articles.map(article => <ArticleCard article={article}/>) : null}
        </div>
    );
};

export {ArticlePage}