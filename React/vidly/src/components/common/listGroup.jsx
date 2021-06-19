import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      items,
      onItemSelect,
      textProperty,
      idProperty,
      currentGenre,
    } = this.props;

    return (
      <ul className="list-group">
        {items.map((i) => (
          <li key={items.indexOf(i)} >
            <a 
              href="#"
              className={
                currentGenre === i[textProperty]
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              onClick={() => onItemSelect(i[textProperty])}
            >
              {i[textProperty]}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
