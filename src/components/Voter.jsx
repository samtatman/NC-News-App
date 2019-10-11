import React from "react";
import { changeVotes } from "../utils/api";
import style from "./Voter.module.css";

class Voter extends React.Component {
  state = { voteChange: 0 };

  alterVote = num => {
    const { id, content } = this.props;
    const { voteChange } = this.state;
    if (voteChange !== 0) {
      changeVotes(-voteChange, id, content);
      this.setState({ voteChange: 0 });
    } else {
      this.setState({ voteChange: num });
      changeVotes(num, id, content);
    }
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    let upVoteColor = "";
    let downVoteColor = "";
    if (voteChange === 1) upVoteColor = style.upVoted;
    if (voteChange === -1) downVoteColor = style.downVoted;
    return (
      <div className={style.voteButtons}>
        <i
          onClick={() => this.alterVote(1)}
          className={`fas fa-arrow-alt-circle-up ${upVoteColor}`}
        ></i>
        <p className={style.votes}>{votes + voteChange}</p>
        <i
          onClick={() => this.alterVote(-1)}
          className={`fas fa-arrow-alt-circle-down ${downVoteColor}`}
        ></i>
      </div>
    );
  }
}

export default Voter;
