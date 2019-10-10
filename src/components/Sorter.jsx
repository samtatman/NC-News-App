import React from "react";

class Sorter extends React.Component {
  state = { order: "desc" };
  render() {
    const { changeSortandOrder } = this.props;
    return (
      <div>
        <button
          onClick={() => changeSortandOrder("order_by")}
          class="fas fa-sort-amount-up"
        ></button>
        <p>order</p>
        <button onClick={() => changeSortandOrder("sort_by", "comment_count")}>
          comment_count
        </button>
        <button onClick={() => changeSortandOrder("sort_by", "created_at")}>
          date added
        </button>
        <button onClick={() => changeSortandOrder("sort_by", "votes")}>
          votes
        </button>
      </div>
    );
  }
}

export default Sorter;
