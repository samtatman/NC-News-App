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
    const { username } = this.props;
    const signIn = username || "Sign In";
    console.log(topics, "topics");
    return (
      <nav>
        <Link to="/">Home</Link>{" "}
        {topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={`${topic.slug}`}>
              {topic.slug}{" "}
            </Link>
          );
        })}
        {username && <Link to="/user/jessjelly">{signIn}</Link>}
      </nav>
    );
  }
}

export default Nav;
