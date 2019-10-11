import React from "react";
import { deleteCommentById } from "../utils/api";

class Deleter extends React.Component {
  state = {};

  removeComment = () => {
    const { comment_id, deleteCard } = this.props;
    deleteCard();
    deleteCommentById(comment_id);
  };

  render() {
    const { username, author } = this.props;
    if (username === author) {
      return <i className="fas fa-trash-alt" onClick={this.removeComment}></i>;
    } else return <p></p>;
  }
}

export default Deleter;
