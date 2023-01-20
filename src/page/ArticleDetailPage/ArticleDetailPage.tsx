import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppSelector} from "../../hooks";
import './stylist.scss'

const ArticleDetailPage: FC = () => {

    const {currentArticle} = useAppSelector(state => state.articleReducer)

    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div className="container">
            <img src={currentArticle?.urlToImage} alt=""/>

            <div className='changePosition'>
                <div className="allText">
                    <h1>{currentArticle?.title}</h1>
                    <p>{currentArticle?.content} <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
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
                    <p>Back</p>
                </div>
            </div>
        </div>
    );
};

export {ArticleDetailPage}