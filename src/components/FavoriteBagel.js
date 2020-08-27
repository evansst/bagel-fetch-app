import React from 'react';

export default function FavoriteBagel({ bagel: { type, } }) {

  return (
    <li className="favorite-bagel">
      <p>Name: {type}</p>
    </li>
  )
}