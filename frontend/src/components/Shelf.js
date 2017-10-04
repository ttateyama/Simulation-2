import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shelf extends Component {
  render() {
    return (
      <div className="Shelf_container">
        <Link to={ `/bins/${this.props.shelves.id}` }>
          <span>Shelf {this.props.shelves.id}</span>
        </Link>
      </div>
    )
  }
}

export default Shelf;