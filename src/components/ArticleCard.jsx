import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import style from "./ArticleCard.module.css";
import moment from "moment";

class ArticleCard extends React.Component {
  state = {};

  render() {
    const { article } = this.props;
    const {
      article_id,
      comment_count,
      title,
      votes,
      author,
      created_at
    } = article;

    return (
      <li key={title} className={style.card}>
        <Link to={`/user/${author}`}> {author} </Link>
        <div className={style.main}>
          <Voter votes={votes} id={article_id} content="article" />
          <Link to={`/articles/${article_id}`} className={style.title}>
            <h3 className={style.title}>{title}</h3>{" "}
          </Link>
        </div>
        <div className={style.comment}>
          <p>
            <span>
              <i className="fas fa-comment"> </i>{" "}
            </span>
            Comments:{comment_count}
          </p>
          <p>{moment(created_at).fromNow()}</p>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
