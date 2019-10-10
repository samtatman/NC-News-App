import React from "react";

class Sorter extends React.Component {
  changeOrder = () => {
    const { changeSortandOrder, order_by } = this.props;
    let newOrder;
    if (order_by === "desc") newOrder = "asc";
    else if (order_by === "asc") newOrder = "desc";
    changeSortandOrder("order_by", newOrder);
  };
  render() {
    const { changeSortandOrder, order_by } = this.props;
    let buttonClass;
    if (order_by === "desc") buttonClass = "fas fa-sort-amount-up";
    if (order_by === "asc") buttonClass = "fas fa-sort-amount-down";
    return (
      <div>
        <button
          onClick={this.changeOrder}
          className={`${buttonClass}`}
        ></button>
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
