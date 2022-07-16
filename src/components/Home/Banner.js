import React from 'react';
import BannerIme from './img/banner1.jpg';

function Banner() {
  return (
    <div>
      <div className='banner mx-auto d-flex justify-content-center ps-5'>
        <div className='categories vh-25 bg-white p-4'>
          <ul className='list-unstyled  '>
            <li className='pt-0'>Clothing & Accesories</li>
            <li className='pt-3'>Shoes, Luggage & Bags</li>
            <li className='pt-3'>Household Supplies</li>
            <li className='pt-3'>Home Applicance</li>
            <li className='pt-3'>Sports & Outdoors</li>
            <li className='pt-3'>Consumer Electronics</li>
            <li className='pt-3'>Computer & Officer</li>
            <li className='pt-3'>Automobile</li>
            <li className='pt-3'>Underwears/loungwear</li>
          </ul>
        </div>
        <div
          id='carouselExampleIndicators'
          class='carousel slide w-100 banner-scroll pe-4'
          data-bs-ride='true'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={BannerIme} class='d-block  w-100' alt='...' />
            </div>
            <div class='carousel-item'>
              <img src={BannerIme} class='d-block  w-100' alt='...' />
            </div>
            <div class='carousel-item'>
              <img src={BannerIme} class='d-block  w-100' alt='...' />
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <ul className='d-flex justify-content-between pt-5 pb-5 w-75 mx-auto list-unstyled '>
        <li className='p2'>Stable sources of product</li>
        <li className='p2'>JD selected quality sellers</li>
        <li className='p2'>Payment production</li>
      </ul>
    </div>
  );
}

export default Banner;
