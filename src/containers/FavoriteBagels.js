import React from 'react';
import FavoriteBagel from '../components/FavoriteBagel';

export default function FavoriteBagels({ bagels, clearFavorites, removeFromFavorites }) {

  const favBagelList = (bagels) => {
    return bagels.map(bagel => {
      return (
        <FavoriteBagel
          key={bagel.id}
          bagel={bagel}
          removeFromFavorites={removeFromFavorites}
        />
      )
    })
  }
 
  return (
    <div className="favorite-bagels">
      <h1>Favorites:</h1>
      <button onClick={clearFavorites}>Clear</button>
      <ul>
        {favBagelList(bagels)}
      </ul>
    </div>
  )
}