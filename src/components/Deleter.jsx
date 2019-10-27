import React from "react";
import { deleteCommentById } from "../utils/api";
import style from "./Deleter.module.css";

class Deleter extends React.Component {
  removeComment = () => {
    const { comment_id, deleteCard, isDeleted } = this.props;
    if (!isDeleted) {
      deleteCard();
      deleteCommentById(comment_id);
    }
  };

  render() {
    const { username, author } = this.props;
    return (
      <div className={style.main}>
        {username === author ? (
          <i className="fas fa-trash-alt" onClick={this.removeComment}></i>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default Deleter;
