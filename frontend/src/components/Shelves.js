import React, { Component } from 'react';
import Shelf from './Shelf'

class Shelves extends Component {
  render() {
    let shelf;
    if(this.props.shelves) {
      shelf = this.props.shelves.map(shelfie => {
        return(
          <Shelf key={shelfie.id} shelves={shelfie} />
        )
      });
    }
    return (
      <div className="Shelves">
        {shelf}
      </div>
    )
  }
}

export default Shelves;