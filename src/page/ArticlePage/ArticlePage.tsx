import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {ArticleCard} from "../../components";
import {Search} from "../../components";

import './articlePage.style.scss'
import {useSearchParams} from "react-router-dom";

const ArticlePage: FC = () => {

    const {articles, loading, error} = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()

    const [query, _] = useSearchParams()
    const value = query.get('contains') as string

    useEffect(() => {
        if (!value) {
            dispatch(articleActions.getAllArticle())
        } else {
            dispatch(articleActions.searchArticles(value))
        }
    }, [dispatch, value])

    return (
        <div className="wrap">

            <Search/>

            {error && <div>{error}</div>}

            {(!loading) && (<h4>Results:{articles.length}</h4>)}

            <hr/>

            {(!loading) ?
                (<div className="cardsList">
                    {articles && articles.map((article,index) => <ArticleCard article={article} key={index} query={query}/>)}
                </div>) :
                (<div className='loadingScreen'><p>Loading...</p></div>)

            }

        </div>
    );
};

export {ArticlePage}