import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {ArticlePage, ArticleDetailPage} from './page';
import './App.scss'


const App: FC = () => {
    return (
        <div className="content">
            <Routes>
                <Route index path={'/'} element={<ArticlePage/>}/>
                <Route path={'/details'} element={<ArticleDetailPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
