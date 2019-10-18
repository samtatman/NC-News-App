import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";
import SingleUser from "./components/SingleUser";
import ErrorHandler from "./components/ErrorHandler";

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
          <SingleUser path="/user/:username" />
          <SingleArticle path="/articles/:article_id" username={username} />
          <ErrorHandler path="/*" error="Page Not Found" />
        </Router>
      </main>
    );
  }
}

export default App;
