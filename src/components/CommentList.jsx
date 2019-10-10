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
    isLoading: true
  };

  componentDidMount() {
    this.fetchComments();
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
  fetchComments = () => {
    const { article_id } = this.props;
    const { sort_by, order_by, p } = this.state;
    getCommentsByArticleId(article_id, sort_by, order_by, p).then(
      commentsAndCount => {
        this.setState({
          comments: commentsAndCount[0],
          comment_count: commentsAndCount[1],
          isLoading: false
        });
      }
    );
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
    const { comments, isLoading, order_by, sort_by } = this.state;
    const { article_id } = this.props;
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
            />
            <ul>
              {comments.map(comment => {
                return (
                  <CommentCard key={comment.comment_id} comment={comment} />
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
