import React from "react";
import { Link } from "@reach/router";
import { getTopics } from "../utils/api";

class Nav extends React.Component {
  state = { topics: [], username: null };

  componentDidMount() {
    return getTopics().then(topics => {
      console.log(topics);
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    const signIn = this.state.username || "Sign In";
    console.log(topics, "topics");
    return (
      <nav>
        <Link to="/">Home</Link>{" "}
        {topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`}>{topic.slug} </Link>
          );
        })}
        <Link to="/user/jessjelly">Sign In</Link>
      </nav>
    );
  }
}

export default Nav;
