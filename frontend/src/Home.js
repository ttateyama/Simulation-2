import React, { Component } from 'react';
import logo from './logo.svg';
import Shelves from './components/Shelves';
import './App.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shelves: []
    }
  }

  componentWillMount(){
    this.setState({shelves: [
      {
        id: 'A',
        bins: [null, null, null, null, null]
      },
      {
        id: 'B',
        bins: [null, null, null, null, null]
      },
      {
        id: 'C',
        bins: [null, null, null, null, null]
      },
      {
        id: 'D',
        bins: [null, null, null, null, null]
      }
    ]})
  }

  render() {
    return (
      <div className="Home">
        SHELFIE
        <Shelves shelves={this.state.shelves}/>
      </div>
    );
  }
}

export default Home;
