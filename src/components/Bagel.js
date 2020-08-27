import React from 'react';

export default function Bagel({ type, rating }) {
  return (
    <li className="bagel">
      Type: {type}, Rating: {rating}
    </li>
  )
}