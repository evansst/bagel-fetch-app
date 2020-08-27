import React, { Component } from 'react';
import './App.css';
import BagelContainer from './containers/BagelContainer';

const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels/';

export default class App extends Component {
  state = {
    bagels: [],
  }

  componentDidMount() {

    fetch(baseURL)
      .then(response => response.json())
      .then(bagels => this.setState({
        bagels: bagels,
      }))
  }
  
  render() {
    return (
      <div className="App">
        <h1>Bagels:</h1>
        <BagelContainer bagels={this.state.bagels} />
      </div>
    );
  }
}
