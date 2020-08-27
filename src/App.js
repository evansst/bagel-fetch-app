import React, { Component } from 'react';
import './App.css';
import BagelContainer from './containers/BagelContainer';

const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels/';

export default class App extends Component {
  state = {
    bagels: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Bagels:</h1>
        <BagelContainer bagels={this.state.bagels} deleteBagel={this.handleButtonClick}/>
      </div>
    );
  }

  componentDidMount() {

    fetch(baseURL)
      .then(response => response.json())
      .then(bagels => this.setState({
        bagels: bagels,
      }))
  }

  handleButtonClick = (id) => {
    fetch(`${baseURL}${id}`, {
      method: 'DELETE'
    })

    const filteredBagels = (bagels) => {
      return bagels.filter(bagel => bagel.id !== id)
    }

    this.setState({
      bagels: filteredBagels(this.state.bagels)
    })
  }
}
