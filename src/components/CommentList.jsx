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
    comment_count: 0,
    sort_by: "created_at",
    order_by: "desc",
    p: 1,
    limit: 5,
    isLoading: true,
    error: null
  };

  controller = new AbortController();

  componentDidMount() {
    this.fetchComments();
    this.addScrollEventListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order_by } = this.state;
    if (
      prevProps !== this.props ||
      prevState.sort_by !== sort_by ||
      prevState.order_by !== order_by
    ) {
      this.fetchComments();
    }
  }

  componentWillUnmount() {
    this.removeScrollEventListener();
    this.controller.abort();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    const { sort_by, order_by, p, limit } = this.state;
    getCommentsByArticleId(article_id, sort_by, order_by, p, limit)
      .then(commentsAndCount => {
        console.log(commentsAndCount);
        this.setState({
          comments: commentsAndCount[0],
          comment_count: commentsAndCount[1],
          isLoading: false
        });
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
    const { p, limit, comment_count } = this.state;
    console.log("hello", distanceFromTop, documentHeight);
    console.log(p);

    if (
      distanceFromTop + 1000 > documentHeight &&
      !this.state.isLoading &&
      p < Math.ceil(comment_count / limit)
    ) {
      console.log("hi");
      this.setState(currentState => {
        return {
          p: currentState.p + 1
        };
      });
    }
  }, 2000);

  render() {
    const { comments, isLoading, order_by, sort_by } = this.state;
    const { article_id, username } = this.props;
    return (
      <main className="commentList">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
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
            <CommentAdder
              article_id={article_id}
              fetchComments={this.fetchComments}
            />
          </div>
        )}
      </main>
    );
  }
}

export default CommentList;
