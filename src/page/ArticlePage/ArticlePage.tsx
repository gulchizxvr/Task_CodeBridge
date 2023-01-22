import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {ArticleCard} from "../../components/ArticleCard/ArticleCard";
import {Search} from "../../components/Search/Search";

import './articlePage.stylist.scss'

const ArticlePage: FC = () => {

    const {articles, loading} = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(articleActions.getAllArticle())
    }, [])

    const countResults = articles.length

    return (
        <div className="wrap">
            <Search/>
            {(!loading) && (<h4 style={{fontFamily: "Montserrat"}}>Results:{countResults}</h4>)}
            <hr/>

            {(!loading) ?
                (<div className="cardsList">
                    {articles && articles.map(article => <ArticleCard article={article}/>)}
                </div>) :
                (<div className='loadingScreen'><h3>Loading...</h3></div>)

            }

        </div>
    );
};

export {ArticlePage}