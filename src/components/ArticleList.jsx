import React from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";

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

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order_by } = this.state;
    if (
      prevProps !== this.props ||
      prevState.sort_by !== sort_by ||
      prevState.order_by !== order_by
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, author } = this.props;
    const { sort_by, order_by } = this.state;
    getArticles(topic, author, sort_by, order_by).then(articles => {
      this.setState({ articles });
    });
  };

  changeSortandOrder = (keyToChange, value) => {
    this.setState({ [keyToChange]: value });
  };
  render() {
    const { articles } = this.state;
    return (
      <main>
        <Sorter changeSortandOrder={this.changeSortandOrder} />
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={`${article.title}`} />;
          })}
        </ul>
      </main>
    );
  }
}

export default ArticleList;
