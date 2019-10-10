import React from "react";
import { getArticleById } from "../utils/api";
import Voter from "./Voter";

class ArticleView extends React.Component {
  state = { article: {} };

  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  };

  render() {
    const { article } = this.state;
    const { title, body, votes, article_id } = article;
    return (
      <main>
        <h2>{title}</h2>
        <p>{body}</p>
        <Voter votes={votes} id={article_id} content="article" />
      </main>
    );
  }
}

export default ArticleView;
