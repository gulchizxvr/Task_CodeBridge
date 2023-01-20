import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './stylist.scss'

const ArticleDetailPage:FC = () => {

    const {currentArticle} = useAppSelector(state => state.articleReducer)

    return (
        <div>
            <h1>{currentArticle?.title}</h1>
            <p>{currentArticle?.description}</p>

        </div>
    );
};

export {ArticleDetailPage}