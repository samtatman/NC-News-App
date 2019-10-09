import React from "react";
import { getArticleById } from "../utils/api";

class ArticleView extends React.Component {
  state = { article: {} };

  componentDidMount() {
    const { article_id } = this.props;
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default ArticleView;
