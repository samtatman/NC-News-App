import React from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";
import Loader from "./Loader";
import throttle from "lodash.throttle";
import ErrorHandler from "./ErrorHandler";

class ArticleList extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order_by: "desc",
    p: 1,
    limit: 10,
    isLoading: true,
    nextPageLoading: false,
    error: null
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.fetchArticles();
    this.addScrollEventListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { author, topic } = this.props;
    const { sort_by, order_by, p } = this.state;
    if (
      prevProps.topic !== topic ||
      prevProps.author !== author ||
      prevState.sort_by !== sort_by ||
      prevState.order_by !== order_by ||
      prevState.p !== p
    ) {
      this.fetchArticles();
    }
  }

  componentWillUnmount() {
    this.removeScrollEventListener();
    this._isMounted = false;
  }

  fetchArticles = () => {
    const { topic, author } = this.props;
    const { sort_by, order_by, p, limit } = this.state;
    getArticles(topic, author, sort_by, order_by, p, limit)
      .then(articles => {
        if (this._isMounted) {
          this.setState({
            articles,
            isLoading: false,
            error: null,
            nextPageLoading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          error: { msg: err.response.data.msg, status: err.response.status }
        });
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

  removeScrollEventListener = () => {
    document
      .querySelector(".articleList")
      .removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = throttle(event => {
    const distanceFromTop = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    if (
      distanceFromTop + 1000 > documentHeight &&
      !this.state.nextPageLoading &&
      !this.state.isLoading
    ) {
      this.setState(currentState => {
        return {
          p: currentState.p + 1,
          nextPageLoading: true
        };
      });
    }
  }, 2000);

  render() {
    const {
      articles,
      isLoading,
      nextPageLoading,
      sort_by,
      order_by,
      error
    } = this.state;
    const { topic } = this.props;
    return (
      <main className="articleList">
        {error ? (
          <ErrorHandler error={error} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div>
            {topic && <p>Articles about {topic}</p>}
            <Sorter
              changeSortandOrder={this.changeSortandOrder}
              sort_by={sort_by}
              order_by={order_by}
              content="articles"
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
            {nextPageLoading && <Loader />}
          </div>
        )}
      </main>
    );
  }
}
export default ArticleList;
