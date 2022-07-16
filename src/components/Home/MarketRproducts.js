import React from 'react';
import OemImg from './img/oem.jpg';

function MarketRproducts() {
  return (
    <div>
      <div class=' mt-4 mb-4 mx-2 card ' style={{ width: '13rem' }}>
        <img src={OemImg} class='card-img-top' alt='...' />
        <div class='card-body'>
          <p class='card-text'>
            Smart Car Automatherapy Spray Fragrance tablets ...
          </p>
          <h2 className='text-danger'>US $12.43</h2>
          <p>1 piece (min order)</p>
        </div>
      </div>
    </div>
  );
}

export default MarketRproducts;
