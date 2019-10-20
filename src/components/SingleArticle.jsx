import React from "react";
import ArticleView from "./ArticleView";
import CommentList from "./CommentList";
import ErrorHandler from "./ErrorHandler";

class SingleArticle extends React.Component {
  state = { error: null };

  handleArticleNotFound = error => {
    this.setState({
      error: { msg: error.response.data.msg, status: error.response.status }
    });
  };
  render() {
    const { article_id, username } = this.props;
    const { error } = this.state;
    return (
      <main>
        {error ? (
          <ErrorHandler error={error} />
        ) : (
          <div>
            <ArticleView
              article_id={article_id}
              handleArticleNotFound={this.handleArticleNotFound}
            />
            <CommentList article_id={article_id} username={username} />
          </div>
        )}
      </main>
    );
  }
}

export default SingleArticle;
