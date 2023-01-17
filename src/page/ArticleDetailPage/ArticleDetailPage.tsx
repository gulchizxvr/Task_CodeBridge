import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";



const ArticleDetailPage:FC = () => {

    const {currentArticle} = useAppSelector(state => state.articleReducer)

    return (
        <div>
            <h1>{currentArticle?.title}</h1>
        </div>
    );
};

export {ArticleDetailPage}