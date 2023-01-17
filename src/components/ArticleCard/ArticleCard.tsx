import React, {FC, ReactNode} from 'react';
import {IArticle} from "../../interface/response.interface";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {articleActions} from "../../redux";

    interface IProps{
        article: IArticle,
        children?:ReactNode
    }



const ArticleCard:FC<IProps> = ({article}) => {
    const {title, url, imageUrl, id, summary, publishedAt} = article

    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const toDetails = () => {
        navigate(`/details`)
        dispatch(articleActions.selectArticle(article))
    }


    return (
        <div>
            <h3>{title}</h3>
            <div onClick={toDetails}>Read More</div>
        </div>
    );
};

export {ArticleCard}