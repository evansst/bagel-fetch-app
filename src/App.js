import React, { Component } from 'react';
import './App.css';
import BagelContainer from './containers/BagelContainer.js';
import FavoriteBagels from './containers/FavoriteBagels.js';

const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels/';

export default class App extends Component {
  state = {
    bagels: [],
    favorites: [],
  }

  render() {
    console.log('here you go, ben')

    const {
      bagels,
      favorites
    } = this.state

    return (
      <div className="App">
        <h1>Bagels:</h1>
        <BagelContainer
          bagels={bagels}
          deleteBagel={this.deleteBagel}
          addToFavorites={this.addToFavorites}
        />
        <h1>Favorites:</h1>
        <FavoriteBagels 
          bagels={favorites}
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
