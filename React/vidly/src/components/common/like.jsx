import React, { Component } from "react";

class Like extends Component {
  render() {
    let likeClass = "fa fa-heart";
    likeClass = this.props.liked ? likeClass : (likeClass += "-o");
    return (
      <i
        className={likeClass}
        aria-hidden="true"
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
