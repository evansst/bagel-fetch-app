import React from 'react';
import FavoriteBagel from '../components/FavoriteBagel';

export default function FavoriteBagels({ bagels }) {

  const favBagelList = (bagels) => {
    return bagels.map(bagel => {
      return (
        <FavoriteBagel
          key={bagel.id}
          bagel={bagel}
        />
      )
    })
  }
 
  return (
    <div className="favorite-bagels">
      <h1>Favorites:</h1>
      <button>Clear</button>
      <ul>
        {favBagelList(bagels)}
      </ul>
    </div>
  )
}