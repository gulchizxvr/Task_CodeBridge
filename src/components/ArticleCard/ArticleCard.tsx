import React, {FC, ReactNode} from 'react';
import {IArticle} from "../../interface/response.interface";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {articleActions} from "../../redux";
import "./articleCard.style.scss"
import "@fontsource/montserrat"

interface IProps {
    article: IArticle,
    children?: ReactNode
}


const ArticleCard: FC<IProps> = ({article}) => {
    const {title, description} = article

    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const toDetails = () => {
        navigate(`/details`)
        dispatch(articleActions.selectArticle(article))
    }


    return (
        <div className="cards">
            <img src={article.urlToImage} alt=""/>

            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="buttonDetail" onClick={toDetails}><p><b>Read More</b></p></div>
        </div>
    );
};

export {ArticleCard}