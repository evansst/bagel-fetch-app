import React from 'react';

export default function FavoriteBagel(props) {
  const { 
    bagel: { type, id },
    removeFromFavorites,
  } = props


  return (
    <li className="favorite-bagel">
      <p>{type}</p><button onClick={() => removeFromFavorites(id)}>Remove</button>
    </li>
  )
}