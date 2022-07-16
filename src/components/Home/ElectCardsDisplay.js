import React from 'react';
import ElectCards from './ElectCards';
import SmartDevice from './img/market4.png';

function ElectCardsDisplay() {
  return (
    <div>
      <ElectCards
        title={'Smart device'}
        img1={SmartDevice}
        img2={SmartDevice}
        img1Cap={'Camera'}
        img2Cap={'Fitness Watch'}
      />
    </div>
  );
}

export default ElectCardsDisplay;
