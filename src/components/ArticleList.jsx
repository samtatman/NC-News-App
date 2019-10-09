import React from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends React.Component {
  state = {
    articles: [],
    total_count: 0,
    sort_by: null,
    order_by: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, author } = this.props;
    getArticles(topic, author).then(articles => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => {
          return <ArticleCard article={article} key={`${article.title}`} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
