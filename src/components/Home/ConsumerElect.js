import React from 'react';
import ElectCardsDisplay from './ElectCardsDisplay';

function ConsumerElect() {
  return (
    <div>
      <h3 className='ms-5 p-2 pt-3 pb-3'>CONSUMER ELECTRONICS</h3>
      <div className='electronics d-flex'>
        <div className='electronicsBanner'></div>
        <div className='electronicsCards ms-auto'>
          <ElectCardsDisplay />
          <ElectCardsDisplay />
          <ElectCardsDisplay />
          <ElectCardsDisplay />
          <ElectCardsDisplay />
          <ElectCardsDisplay />
        </div>
      </div>
    </div>
  );
}

export default ConsumerElect;
