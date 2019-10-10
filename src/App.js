import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";
import SingleUser from "./components/SingleUser";
import PageNotFound from "./components/PageNotFound";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <main>
        <Header />
        <Nav username={username} />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles" />
          <ArticleList path="/articles/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <SingleUser path="/user/:username" />
          <PageNotFound path="/*" />
        </Router>
      </main>
    );
  }
}

export default App;
