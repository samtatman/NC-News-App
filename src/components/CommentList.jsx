import React from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import Sorter from "./Sorter";
import Loader from "./Loader";
import throttle from "lodash.throttle";

class CommentList extends React.Component {
  state = {
    comments: [],
    sort_by: "created_at",
    order_by: "desc",
    p: 1,
    limit: 5,
    isLoading: true,
    error: null,
    nextPageLoading: false
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.addScrollEventListener();
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order_by, p } = this.state;
    const { author } = this.props;
    if (
      prevProps.author !== author ||
      prevState.sort_by !== sort_by ||
      prevState.order_by !== order_by ||
      prevState.p !== p
    ) {
      this.fetchComments();
    }
  }

  componentWillUnmount() {
    this.removeScrollEventListener();
    this._isMounted = false;
  }

  fetchComments = () => {
    const { article_id } = this.props;
    const { sort_by, order_by, p, limit } = this.state;
    getCommentsByArticleId(article_id, sort_by, order_by, p, limit)
      .then(comments => {
        if (this._isMounted) {
          this.setState({
            comments,
            isLoading: false,
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
      .querySelector(".commentList")
      .addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  };

  removeScrollEventListener = () => {
    document
      .querySelector(".commentList")
      .removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = throttle(event => {
    const distanceFromTop = window.scrollY;
    const documentHeight = document.body.scrollHeight;

    if (distanceFromTop + 1000 > documentHeight && !this.state.isLoading) {
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
      comments,
      isLoading,
      order_by,
      sort_by,
      nextPageLoading
    } = this.state;
    const { article_id, username } = this.props;
    return (
      <main className="commentList">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <CommentAdder
              article_id={article_id}
              fetchComments={this.fetchComments}
            />
            <Sorter
              changeSortandOrder={this.changeSortandOrder}
              order_by={order_by}
              sort_by={sort_by}
              content="comments"
            />

            <ul>
              {comments.map(comment => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    username={username}
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

export default CommentList;
