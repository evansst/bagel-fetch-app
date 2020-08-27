import React from 'react';
import Bagel from '../components/Bagel.js';

export default function BagelContainer({ bagels, deleteBagel, addToFavorites }) {

  const bagelList = (bagels) => {
    return (deleteBagel) => {
      return bagels.map(bagel => {
        return <Bagel key={bagel.id} deleteBagel={deleteBagel} addToFavorites={addToFavorites} bagel={bagel}/>
      })
    }
  }

  return (
    <ul className="bagel-list">
      {bagelList(bagels)(deleteBagel)}
    </ul>
  );
}