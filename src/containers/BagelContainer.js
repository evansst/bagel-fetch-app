import React from 'react';
import Bagel from '../components/Bagel.js';

export default function BagelContainer({ bagels }) {

  const bagelList = (bagels) => {
    return bagels.map(bagel => {
      return <Bagel key={bagel.id} {...bagel}/>
    })
  }

  return (
    <ul className="bagel-list">
      {bagelList(bagels)}
    </ul>
  );
}