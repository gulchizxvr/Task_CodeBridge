import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {ArticleCard} from "../../components/ArticleCard/ArticleCard";
import {Search} from "../../components/Search/Search";
import {useSearchParams} from 'react-router-dom';

import './style.articlepage.scss'

const ArticlePage: FC = () => {

    const {articles} = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()


    const [query, setQuery] = useSearchParams()


    let contains = query.get('contains')
    console.log(contains);

    useEffect(() => {
        if (!contains) {
            dispatch(articleActions.getAllArticle())
        } else {
            // @ts-ignore
            dispatch(articleActions.searchArticles(contains))
        }
    }, [query, dispatch])

    return (
        <div className="wrap">
            <Search/>
            <h4 style={{fontFamily:"Montserrat"}}>Result</h4>
            <hr/>

            <div className="cardsList">
                {articles && articles.map(article => <ArticleCard article={article}/>)}
            </div>

        </div>
    );
};

export {ArticlePage}