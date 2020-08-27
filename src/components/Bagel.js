import React from 'react';

export default function Bagel({id, type, rating, deleteBagel}) {

  return (
    <li className="bagel">
      <p>Type: {type}, Rating: {rating}</p>
      <button >Add to Favorites</button>
      <button onClick={() => deleteBagel(id)}>Delete</button>
    </li>
  )
}