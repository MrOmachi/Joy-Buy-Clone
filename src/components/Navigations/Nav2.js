import React from 'react';

function Nav2() {
  return (
    <div className='bg-white mb-4 pt-0 p-3'>
      <nav class='navbar navbar-expand-lg  bg-white pt-3 pb-5'>
        <div class='container-fluid'>
          <a class='navbar-brand ms-5 mb-5' href='#'>
            Navbar
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <form class=' w-75 pt-2' role='search'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <ul className='d-flex pt-3 justify-content-center list-unstyled'>
                <li className='ps-3 ms-2 border-start-0'>Pet Supplies</li>
                <li className='ps-3 ms-2 border-start'>Speaker</li>
                <li className='ps-3 ms-2 border-start'>Toys</li>
                <li className='ps-3 ms-2 border-start'>Storage</li>
                <li className='ps-3 ms-2 border-start'>Yoga</li>
                <li className='ps-3 ms-2 border-start'>Headset</li>
                <li className='ps-3 ms-2 border-start'>Lipstick</li>
                <li className='ps-3 ms-2 border-start'>Beauty</li>
              </ul>
            </form>

            <ul class='navbar-nav me-auto mb-2 mb-lg-0 pb-5'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Profile
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link '>My Joybuy</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link '>Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className='d-flex ms-5 list-unstyled '>
        <li className='ps-5'>New Arrival</li>
        <li className='ps-5'>Top Supplies</li>
        <li className='ps-5'>Help Center</li>
        <li className='ps-5'>Join Free</li>
      </ul>
    </div>
  );
}

export default Nav2;
