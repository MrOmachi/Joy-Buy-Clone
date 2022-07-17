import React from 'react';
import Market1Img from './img/market1.png';

function MarketRegion() {
  return (
    <div>
      <div className='marketregion d-flex pb-4'>
        <div class='card m-3 ms-auto' style={{ width: '18rem' }}>
          <div class='card-body'>
            <h5 class='card-text'>North American Market</h5>
            <p>Click below to view more</p>
          </div>
          <div className='d-flex'>
            <img
              class='card-img-top w-50 p-4 pt-2'
              src={Market1Img}
              alt='Card image cap'
            />
            <img
              class='card-img-top w-50 p-4 pt-2'
              src={Market1Img}
              alt='Card image cap'
            />
          </div>
        </div>
        <div class='card m-3' style={{ width: '18rem' }}>
          <div class='card-body'>
            <h5 class='card-text'>North American Market</h5>
            <p>Click below to view more</p>
          </div>
          <div className='d-flex'>
            <img
              class='card-img-top w-50 p-4 pt-2'
              src={Market1Img}
              alt='Card image cap'
            />
            <img
              class='card-img-top w-50 p-4 pt-2'
              src={Market1Img}
              alt='Card image cap'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketRegion;
