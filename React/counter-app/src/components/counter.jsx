import React, { Component } from "react";

class Counter extends Component {
  render() {
  return (
      <div className="row align-items-start">
        <div className="col col-6  col-sm-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            className="btn btn-secondary btn-sm mr-1"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className= "btn btn-secondary btn-sm mr-1"
            disabled = {this.props.counter.value == 0 ? true : ''}
          >
            -
          </button> 

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm mr-1"
          >
            X
          </button> 
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
