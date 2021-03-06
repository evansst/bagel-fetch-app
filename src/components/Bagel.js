import React from 'react';

export default function Bagel(props) {
  const {
    bagel,
    deleteBagel,
    addToFavorites,
  } = props

  return (
    <div className="bagel">
      <p>Type: {bagel.type}, Rating: {bagel.rating}</p>
      <button onClick={() => addToFavorites(bagel)}>Add to Favorites</button>
      <br/>
      <button onClick={() => deleteBagel(bagel.id)}>Delete</button>
    </div>
  )
}