import React from "react";

class Sorter extends React.Component {
  state = {};
  render() {
    const { changeSortandOrder } = this.props;
    return (
      <div>
        <p>order</p>
        <button onClick={() => changeSortandOrder("order_by", "asc")}>
          ascending
        </button>
        <button onClick={() => changeSortandOrder("order_by", "desc")}>
          descending
        </button>
        <p>order</p>
        <button onClick={() => changeSortandOrder("sort_by", "comment_count")}>
          comment_count
        </button>
        <button onClick={() => changeSortandOrder("sort_by", "created_at")}>
          date added
        </button>
      </div>
    );
  }
}

export default Sorter;
