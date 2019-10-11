import React from "react";
import { getUserByUsername } from "../utils/api";
import ArticleList from "./ArticleList";
import ErrorHandler from "./ErrorHandler";

class SingleUser extends React.Component {
  state = { user: {}, error: null };
  componentDidMount() {
    this.fetchUserByUsername();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchUserByUsername();
    }
  }

  fetchUserByUsername = () => {
    const { username } = this.props;
    getUserByUsername(username)
      .then(user => {
        this.setState({ user, error: null });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          error: { msg: err.response.data.msg, status: err.response.status }
        });
      });
  };

  render() {
    const { user, error } = this.state;
    if (error)
      return (
        <main>
          <ErrorHandler error={error} />
        </main>
      );
    else
      return (
        <main>
          <div>
            <p> {user.username} </p>
            <img src={user.avatar_url} alt="user avatar" />
            <p>Articles by {user.username}</p>
            <ArticleList author={user.username} />
          </div>
        </main>
      );
  }
}

export default SingleUser;
