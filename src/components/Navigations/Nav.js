import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav class='navbar p-0 navbar-expand-lg bg-dark'>
        <div class='container-fluid'>
          <a class='navbar-brand d-none' href='#'>
            Navbar
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav  ms-auto'>
              <li class='nav-item nav-link text-white '>Hi,</li>
              <li class='nav-item'>
                <a
                  class='nav-link text-white active'
                  aria-current='page'
                  href='#'
                >
                  Login
                </a>
              </li>
              <li class='nav-item '>
                <a class='nav-link text-white' href='#'>
                  Join Free
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='#'>
                  My Center
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white'>Orders</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white'>Post an Inquiry</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white'>Shop to</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white'>USD</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
