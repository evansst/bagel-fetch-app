import React from 'react';
import Bagel from '../components/Bagel.js';

export default function BagelContainer({ bagels, deleteBagel, addToFavorites }) {

  const bagelList = (bagels) => {
    return (deleteBagel) => {
      return bagels.map(bagel => {
        return (
          <Bagel key={bagel.id}
            deleteBagel={deleteBagel}
            addToFavorites={addToFavorites}
            bagel={bagel}
          />
        )
      })
    }
  }

  return (
    <div className="bagel-list">
      <h1>Bagels:</h1>
      {bagelList(bagels)(deleteBagel)}
    </div>
  );
}