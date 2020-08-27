import React, { Component } from 'react';
import './App.css';
import BagelContainer from './containers/BagelContainer.js';
import FavoriteBagels from './containers/FavoriteBagels.js';

const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels';

export default class App extends Component {
  state = {
    bagels: [],
    favorites: [],
  }

  render() {
    const {
      bagels,
      favorites
    } = this.state

    return (
      <div className="App">
        <BagelContainer
          bagels={bagels}
          deleteBagel={this.deleteBagel}
          addToFavorites={this.addToFavorites}
        />
        
        <FavoriteBagels 
          bagels={favorites}
          clearFavorites={this.clearFavorites}
          removeFromFavorites={this.removeFromFavorites}
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
    const { bagels } = this.state;

    fetch(`${baseURL}/${id}`, { method: 'DELETE' })

    this.setState({
      bagels: this.filteredBagels(bagels)(id)
    })
  }

  addToFavorites = (bagel) => {
    this.setState({
      favorites: [...this.state.favorites, bagel],
    })
  }

  clearFavorites = () => {
    this.setState({
      favorites: [],
    })
  }

  removeFromFavorites = (id) => {
    const { favorites } = this.state

    this.setState({
      favorites: this.filteredBagels(favorites)(id)
    })
  }

  filteredBagels = (bagels) => {
    return (id) => {
      return bagels.filter(bagel => bagel.id !== id)
    }
  }
}
