import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {ArticleCard} from "../../components/ArticleCard/ArticleCard";
import {Search} from "../../components/Search/Search";
import {useSearchParams} from 'react-router-dom';

const ArticlePage: FC = () => {

    const {articles} = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()


    const [query, setQuery] = useSearchParams()

    let contains = query.get('contains')


    useEffect(() => {
        if (contains) {
            dispatch(articleActions.getAllArticle())
        } else {
            dispatch(articleActions.getAllArticle())
        }
    }, [dispatch])

    return (
        <div>
            <Search/>
            {articles ? articles.map(article => <ArticleCard article={article}/>) : null}
        </div>
    );
};

export {ArticlePage}