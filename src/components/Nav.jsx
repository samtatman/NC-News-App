import React from "react";
import { Link } from "@reach/router";
import { getTopics } from "../utils/api";
import style from "./Nav.module.css";

class Nav extends React.Component {
  state = { topics: [], username: null, selected: "home" };

  componentDidMount() {
    return getTopics().then(topics => {
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
            <i className={`fas fa-home ${style.navElem}`} />
          </span>
        </Link>
        {topics.map(topic => {
          return (
            <Link
              to={`/articles/topics/${topic.slug}`}
              key={`${topic.slug}`}
              className={style.navElem}
            >
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </Link>
          );
        })}
        {username && (
          <Link to="/user/jessjelly" className={style.navElem}>
            <span>
              <i className={`fas fa-user ${style.navElem}`}></i>
            </span>
            {` ${signIn}`}
          </Link>
        )}
      </nav>
    );
  }
}

export default Nav;
