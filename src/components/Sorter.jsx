import React from "react";
import style from "./Sorter.module.css";

class Sorter extends React.Component {
  state = {
    sort_byValue: "comment_count"
  };

  handleChange = ({ target }) => {
    this.setState({ sort_byValue: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { sort_byValue } = this.state;
    const { changeSortandOrder } = this.props;
    changeSortandOrder("sort_by", sort_byValue);
  };

  changeOrder = () => {
    const { changeSortandOrder, order_by } = this.props;
    let newOrder;
    if (order_by === "desc") newOrder = "asc";
    else if (order_by === "asc") newOrder = "desc";
    changeSortandOrder("order_by", newOrder);
  };

  render() {
    const { order_by, content } = this.props;
    let buttonClass;
    if (order_by === "desc") buttonClass = "fas fa-sort-amount-up";
    if (order_by === "asc") buttonClass = "fas fa-sort-amount-down";
    return (
      <div className={style.sortBar}>
        <i onClick={this.changeOrder} className={buttonClass}></i>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {content === "articles" && (
              <option value="comment_count">comment_count</option>
            )}
            <option value="created_at">date added</option>
            <option value="votes">votes</option>
          </select>
          <button>Sort</button>
        </form>
      </div>
    );
  }
}

export default Sorter;
