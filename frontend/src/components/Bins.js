import React, { Component } from 'react';
import BinItem from './BinItem'

class Bins extends Component {
  render() {
    let binItem;
    if(this.props.bins) {
      binItem = this.props.bins.map(bin => {
        return(
          <BinItem key={bin.binNumber} bins={bin} />
        )
      });
    }
    return (
      <div className="Bins">
        {binItem}
      </div>
    )
  }
}

export default Bins;