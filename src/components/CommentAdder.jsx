import React from "react";
import { postCommentByArticleId } from "../utils/api";

class CommentAdder extends React.Component {
  state = { body: "", username: "jessjelly" };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props, "props");
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tell us how we're wrong!!
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.body}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default CommentAdder;
