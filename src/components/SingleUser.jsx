import React from "react";
import { getUserByUsername } from "../utils/api";
import ArticleList from "./ArticleList";

class SingleUser extends React.Component {
  state = { user: {} };
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
    getUserByUsername(username).then(user => {
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <main>
        <p> {user.username} </p>
        <img src={user.avatar_url} alt="user avatar" />
        <ArticleList author={user.username} />
      </main>
    );
  }
}

export default SingleUser;
