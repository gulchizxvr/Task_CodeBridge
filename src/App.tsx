import React, {FC} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";


import { ArticlePage,ArticleDetailPage } from './page';


const App:FC = () => {
  return (
      <Routes>
        <Route index path={'/'} element={<ArticlePage/>}/>
        <Route path={'/details'} element={<ArticleDetailPage/>}/>
      </Routes>
  )
}

export default App;
