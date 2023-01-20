import React, {FC, ReactNode} from 'react';
import {IArticle} from "../../interface/response.interface";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {articleActions} from "../../redux";
import "./articleCard.style.scss"
import "@fontsource/montserrat";

import moment from "moment";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface IProps {
    article: IArticle,
    children?: ReactNode
}


const ArticleCard: FC<IProps> = ({article}) => {
    const {title, description,publishedAt} = article

    const navigate = useNavigate()
    const dispatch = useAppDispatch()



    const toDetails = () => {
        navigate(`/details`)
        dispatch(articleActions.selectArticle(article))
    }




return (
        <div className="cards">

            {
                article.urlToImage ? <img src={article.urlToImage} alt=""/> : <div className="errorPoster"><p>There isn't an image</p></div>
            }


            <div className="text">
                <div className="date" style={{display:"flex", alignContent:"center", color:'#363636'}}>
                    <CalendarTodayIcon style={{height:"17px"}}/>
                    <p style={{margin:"0 5px", height:"25px", fontSize:"14px", color: "#363636"}}>{moment(publishedAt).format("MMMM Do, YYYY")}</p>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>

            </div>
            <div className="buttonDetail" onClick={toDetails}><p><b>Read More</b></p></div>
        </div>
    );
};

export {ArticleCard}