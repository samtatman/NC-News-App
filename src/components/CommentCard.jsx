import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import style from "./CommentCard.module.css";
import Deleter from "./Deleter";

class CommentCard extends React.Component {
  state = { deleted: false };

  deleteCard = () => {
    this.setState({ deleted: true });
  };

  render() {
    const { comment, username } = this.props;
    const { created_at, body, author, comment_id, votes } = comment;
    const { deleted } = this.state;
    let cardStyle = style.card;
    if (deleted) cardStyle = style.deletedCard;
    return (
      <li key={created_at} className={cardStyle}>
        <Deleter
          author={author}
          comment_id={comment_id}
          username={username}
          deleteCard={this.deleteCard}
        />

        <div className={style.main}>
          {deleted && <p>comment deleted</p>}
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
