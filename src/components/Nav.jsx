import React from "react";
import { Link } from "@reach/router";
import { getTopics } from "../utils/api";
import style from "./Nav.module.css";

class Nav extends React.Component {
  state = { topics: [], username: null, selected: "home" };

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
    return (
      <nav className={style.navBar}>
        <Link to="/">
          <span>
            <i className="fas fa-home" />{" "}
          </span>
        </Link>
        {topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={`${topic.slug}`}>
              {topic.slug}{" "}
            </Link>
          );
        })}
        {username && (
          <Link to="/user/jessjelly">
            <span>
              <i className="fas fa-user"></i>
            </span>
            {` ${signIn}`}
          </Link>
        )}
      </nav>
    );
  }
}

export default Nav;
