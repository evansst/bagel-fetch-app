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
    <ul className="favorite-bagels">
      {favBagelList(bagels)}
    </ul>
  )
}