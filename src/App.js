import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'
import {Router} from '@reach/router'

function App() {
  return (
    <div>
     <Header />
     <Nav />
     <Router >
     <ArticleList path="/" />
     <ArticleList path="/articles" />
     <SingleArticle path='/articles/:article_id' />
     </Router>
    </div>
  );
}

export default App;
