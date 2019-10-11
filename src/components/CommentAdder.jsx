import React from "react";
import { postCommentByArticleId } from "../utils/api";
import style from "./CommentAdder.module.css";

class CommentAdder extends React.Component {
  state = { body: "", username: "jessjelly" };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, fetchComments } = this.props;
    postCommentByArticleId(article_id, this.state)
      .then(() => {
        return fetchComments();
      })
      .then(() => {
        this.setState({ body: "" });
      });
  };

  render() {
    const { username } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.main}>
        <label>Add Comment as {username}</label>
        <textarea
          onChange={this.handleChange}
          value={this.state.body}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CommentAdder;
