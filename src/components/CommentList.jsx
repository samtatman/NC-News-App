import React from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import Sorter from "./Sorter";

class CommentList extends React.Component {
  state = { comments: [], comment_count: 0, sort_by: null, order_by: null };

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
    const { sort_by, order_by } = this.state;
    getCommentsByArticleId(article_id, sort_by, order_by).then(
      commentsAndCount => {
        this.setState({
          comments: commentsAndCount[0],
          comment_count: commentsAndCount[1]
        });
      }
    );
  };
  changeSortandOrder = (keyToChange, value) => {
    this.setState({ [keyToChange]: value });
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <main>
        <Sorter changeSortandOrder={this.changeSortandOrder} />
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
        <CommentAdder
          article_id={article_id}
          fetchComments={this.fetchComments}
        />
      </main>
    );
  }
}

export default CommentList;
