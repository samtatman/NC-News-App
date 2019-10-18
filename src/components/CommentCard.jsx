import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import style from "./CommentCard.module.css";
import Deleter from "./Deleter";
import moment from "moment";

class CommentCard extends React.Component {
  state = { isDeleted: false };

  deleteCard = () => {
    this.setState({ isDeleted: true });
  };

  render() {
    const { comment, username } = this.props;
    const { created_at, body, author, comment_id, votes } = comment;
    const { isDeleted } = this.state;
    let cardStyle = style.card;
    if (isDeleted) cardStyle = style.deletedCard;
    return (
      <li key={created_at} className={cardStyle}>
        <div>
          <Deleter
            author={author}
            comment_id={comment_id}
            username={username}
            deleteCard={this.deleteCard}
            isDeleted={isDeleted}
          />
          {isDeleted && <p>comment deleted</p>}
        </div>

        <div className={style.main}>
          <Voter votes={votes} id={comment_id} content="comment" />
          <p className={style.body}>{body} </p>
        </div>
        <div className={style.author}>
          <p>
            <Link to={`/user/${author}`}> {author} </Link>{" "}
          </p>
          <p>{moment(created_at).fromNow()} </p>
        </div>
      </li>
    );
  }
}

export default CommentCard;
