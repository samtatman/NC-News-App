import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

class ArticleCard extends React.Component {
  state = {};

  render() {
    const { article } = this.props;
    const { article_id, comment_count, title, votes, author } = article;
    return (
      <li key={title}>
        {" "}
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>{" "}
        </Link>
        <p>
          by: <Link to={`/user/${author}`}> {author} </Link>
        </p>
        <p>comments: {comment_count}</p>
        <Voter votes={votes} id={article_id} content="article" />
      </li>
    );
  }
}

export default ArticleCard;
