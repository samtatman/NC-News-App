import React from "react";
import { getArticleById } from "../utils/api";
import Voter from "./Voter";
import style from "./ArticleView.module.css";

class ArticleView extends React.Component {
  state = { article: {} };

  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id, handleArticleNotFound } = this.props;
    getArticleById(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(error => {
        handleArticleNotFound(error);
      });
  };

  render() {
    const { article } = this.state;
    const { title, body, votes, article_id } = article;
    return (
      <main className={style.main}>
        <div>
          {votes && <Voter votes={votes} id={article_id} content="article" />}
          <h2>{title}</h2>
        </div>
        <p>{body}</p>
      </main>
    );
  }
}

export default ArticleView;
