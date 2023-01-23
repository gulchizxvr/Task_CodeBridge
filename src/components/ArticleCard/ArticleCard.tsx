import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import moment from "moment";
import "@fontsource/montserrat";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Highlighter from 'react-highlight-words'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {IArticle} from "../../interface";
import {urls} from "../../configs"

import "./articleCard.style.scss"

interface IArticleCardProps {
    article: IArticle
    query?: URLSearchParams
}


const ArticleCard: FC<IArticleCardProps> = ({article,query}) => {
    const {title, description,publishedAt,urlToImage} = article

    const navigate = useNavigate()

   const enterSymbol = query?.get("contains")

    const toDetails = () => {
        navigate(`/details`)
        window.localStorage.setItem("description",JSON.stringify(article))
    }

    const replaceSrc = (e:React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = urls.srcReplaceErrorImage
    }

return (
        <div className="cards">
            {
                urlToImage ? <img src={urlToImage} alt={title} onError={replaceSrc}/> : <img src={urls.srcPatternImage} alt={title}/>
            }

            <div className="text">
                <div className="date">
                    <CalendarTodayIcon style={{height:"17px"}}/>

                    <p>{moment(publishedAt).format("MMMM Do, YYYY")}</p>
                </div>

                <h3>
                    <Highlighter
                    searchWords={[enterSymbol as string]}
                    textToHighlight={title}>
                    </Highlighter>
                </h3>

                <p>
                    <Highlighter
                        searchWords={[enterSymbol as string]}
                        textToHighlight={description}>
                    </Highlighter>
                </p>

            </div>
            <div className="buttonDetail" onClick={toDetails}><p>Read More</p><ArrowForwardIcon/></div>
        </div>
    );
};

export {ArticleCard}