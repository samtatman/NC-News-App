import React from "react";
import { getUserByUsername } from "../utils/api";

class SingleUser extends React.Component {
  state = { user: {} };
  componentDidMount() {
    const { username } = this.props;
    getUserByUsername(username).then(user => {
      this.setState({ user });
      console.log(this.state);
    });
  }

  render() {
    const { user } = this.state;
    return (
      <main>
        <p> {user.username} </p>
        <img src={user.avatar_url} />
      </main>
    );
  }
}

export default SingleUser;
