import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import style from "./CommentCard.module.css";

class CommentCard extends React.Component {
  state = {};

  render() {
    const { comment } = this.props;
    const { created_at, body, author, comment_id, votes } = comment;
    return (
      <li key={created_at} className={style.card}>
        <div className={style.main}>
          <Voter votes={votes} id={comment_id} content="comment" />
          {body}
        </div>
        <p>
          <Link to={`/user/${author}`}> {author} </Link>
        </p>
      </li>
    );
  }
}

export default CommentCard;
