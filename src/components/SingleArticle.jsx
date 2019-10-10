import React from "react";
import ArticleView from "./ArticleView";
import CommentList from "./CommentList";

class SingleArticle extends React.Component {
  state = {};

  render() {
    const { article_id } = this.props;
    return (
      <main>
        <ArticleView article_id={article_id} />
        <CommentList article_id={article_id} />
      </main>
    );
  }
}

export default SingleArticle;
