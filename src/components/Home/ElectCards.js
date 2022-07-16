import React from 'react';

function ElectCards({ title, img1, img2, img1Cap, img2Cap }) {
  return (
    <div>
      <div class='card m-2' style={{ width: '16rem' }}>
        <div class='card-body'>
          <h5 class='card-text'>{title}</h5>
        </div>
        <div className='d-flex'>
          <div>
            <img
              class='card-img-top p-4 pt-2'
              src={img1}
              alt='Card image cap'
            />
            <p className='text-center'>{img1Cap}</p>
          </div>
          <div>
            <img
              class='card-img-top p-4 pt-2'
              src={img2}
              alt='Card image cap'
            />
            <p className='text-center'>{img2Cap}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectCards;
