import React from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";
import Loader from "./Loader";
import throttle from "lodash.throttle";

class ArticleList extends React.Component {
  state = {
    articles: [],
    total_count: 0,
    sort_by: "created_at",
    order_by: "desc",
    p: 1,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchArticles();
    this.addScrollEventListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order_by, p } = this.state;
    if (
      prevProps !== this.props ||
      prevState.sort_by !== sort_by ||
      prevState.order_by !== order_by ||
      prevState.p !== p
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, author } = this.props;
    const { sort_by, order_by, p } = this.state;
    getArticles(topic, author, sort_by, order_by, p)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ error: err.response.data.msg });
      });
  };

  changeSortandOrder = (keyToChange, value) => {
    this.setState({ [keyToChange]: value });
  };
  addScrollEventListener = () => {
    document
      .querySelector(".articleList")
      .addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  };
  handleScroll = throttle(event => {
    const distanceFromTop = window.scrollY;
    const documentHeight = document.body.scrollHeight;

    if (distanceFromTop + 1000 > documentHeight) {
      this.setState(currentState => {
        return {
          p: currentState.p + 1
        };
      });
    }
  }, 2000);

  render() {
    const { articles, isLoading, sort_by, order_by } = this.state;
    return (
      <main className="articleList">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Sorter
              changeSortandOrder={this.changeSortandOrder}
              sort_by={sort_by}
              order_by={order_by}
            />
            <ul>
              {articles.map((article, i) => {
                return (
                  <ArticleCard
                    article={article}
                    key={`${article.title}`}
                    index={i}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </main>
    );
  }
}
export default ArticleList;
