import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import './articleDetailPage.style.scss'
import {urls} from "../../configs"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const ArticleDetailPage: FC = () => {

    const navigate = useNavigate()

    const currentArticle = window.localStorage.getItem("description") as string

    const {urlToImage, title, content} = JSON.parse(currentArticle)

    const goBack = ():void =>{
        navigate(-1)
        window.localStorage.removeItem("description")
    }

    const replaceSrc = (e:React.SyntheticEvent<HTMLImageElement>):void => {
        e.currentTarget.onerror = null
        e.currentTarget.src = urls.srcReplaceErrorImage
    }

    return (
        <div className="container">
            {urlToImage ? <img src={urlToImage} alt={title} onError={replaceSrc}/> : <img src={urls.srcPatternImage} alt={title}/>}

            <div className='textBlock'>
                <div className="allText">
                    <h1>{title}</h1>
                    <p>{content} <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                        ab amet
                        asperiores, assumenda dicta ea eligendi eos error esse et eveniet excepturi, exercitationem
                        facere
                        id illo iusto neque nulla praesentium quisquam repellat sapiente soluta unde voluptate
                        voluptates
                        voluptatum. Delectus dolorum excepturi vitae! A animi at, delectus dolore dolorem eligendi est
                        eveniet impedit incidunt libero magnam modi mollitia nostrum odit officiis omnis optio
                        perspiciatis
                        praesentium quis quo reiciendis repellendus sapiente sequi tempore velit vitae voluptates
                        voluptatum. A aut autem consequuntur deleniti dicta dolores esse illo inventore iure iusto
                        laborum
                        laudantium minus necessitatibus quaerat quis quo, unde? Debitis dignissimos fuga quod suscipit?
                    </p>
                </div>
                <div onClick={goBack} className='buttonClick'>
                    <ArrowBackIcon/><p>Back to homepage</p>
                </div>
            </div>
        </div>
    );
};

export {ArticleDetailPage}