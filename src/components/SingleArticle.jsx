import React from "react";
import { getArticleById, getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import Sorter from "./Sorter";
import Voter from "./Voter";

class SingleArticle extends React.Component {
  state = {
    article: {},
    comments: [],
    comment_count: 0
  };

  componentDidMount() {
    const { article_id } = this.props;
    const articlePromise = getArticleById(article_id);
    const commentsPromise = getCommentsByArticleId(article_id);
    return Promise.all([articlePromise, commentsPromise]).then(
      ([article, commentsAndCount]) => {
        this.setState({
          article,
          comments: commentsAndCount[0],
          comment_count: commentsAndCount[1]
        });
      }
    );
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(commentsAndCount => {
      this.setState({
        comments: commentsAndCount[0],
        comment_count: commentsAndCount[1]
      });
    });
  };

  render() {
    const { article } = this.state;
    const { comments } = this.state;
    const { title, body, votes, article_id } = article;
    return (
      <main>
        <h2>{title}</h2>
        <p>{body}</p>
        <Voter votes={votes} id={article_id} content="article" />
        <Sorter changeSortandOrder={this.changeSortandOrder} />
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                alterCommentVotes={this.alterCommentVotes}
              />
            );
          })}
        </ul>
        <CommentAdder
          article_id={article.article_id}
          fetchComments={this.fetchComments}
        />
      </main>
    );
  }
}

export default SingleArticle;
