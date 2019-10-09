import React from "react";
import { changeVotes } from "../utils/api";

class Voter extends React.Component {
  state = { voteChange: 0 };

  alterVote = num => {
    const { id, content } = this.props;
    this.setState({ voteChange: num });
    changeVotes(num, id, content);
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <p>votes: {votes + voteChange} </p>
        <button onClick={() => this.alterVote(1)}>upvote</button>
        <button onClick={() => this.alterVote(-1)}>downvote</button>
      </div>
    );
  }
}

export default Voter;
