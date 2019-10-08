import React from "react";
import { getArticles, changeArticleVotes } from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends React.Component {
  state = {
    articles: [],
    total_count: 0
  };

  changeVotes = (num, article_id) => {
    changeArticleVotes(num, article_id).then(() => {
      return this.fetchArticles();
    });
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
    const { topic } = this.props;
    console.log(topic, "props topic");
    getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => {
          return (
            <ArticleCard article={article} changeVotes={this.changeVotes} />
          );
        })}
      </ul>
    );
  }
}

export default ArticleList;
