import React, { Component } from 'react';
import './App.css';
import BagelContainer from './containers/BagelContainer';

const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels/';

export default class App extends Component {
  state = {
    bagels: [],
    favorites: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Bagels:</h1>
        <BagelContainer
          bagels={this.state.bagels}
          deleteBagel={this.deleteBagel}
          addToFavorites={this.addToFavorites}
        />
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

  deleteBagel = (id) => {
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

  addToFavorites = (bagel) => {

    this.setState({
      favorites: [...this.state.favorites, bagel]
    })
  }
}
