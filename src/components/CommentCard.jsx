import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

class CommentCard extends React.Component {
  state = {};

  render() {
    const { comment } = this.props;
    const { created_at, body, author, comment_id, votes } = comment;
    return (
      <li key={created_at}>
        {body} <br />
        <p>
          <Link to={`/user/${author}`}> {author} </Link>
        </p>
        <Voter votes={votes} id={comment_id} content="comment" />
      </li>
    );
  }
}

export default CommentCard;
