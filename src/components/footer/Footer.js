import React from 'react';

function Footer() {
  return (
    <div className='footersec bg-dark text-center'>
      <ul className='list-unstyled d-flex w-75 m-auto'>
        <li className='p-2 m-1 text-white'>About us</li>
        <li className='p-2 m-1 border-start text-white'>Terms of Service</li>
        <li className='p-2 m-1 border-start text-white'>Privacy Policy</li>
        <li className='p-2 m-1 border-start text-white'>Help Center</li>
        <li className='p-2 m-1  border-start text-white'>
          Intellectual Property Platform
        </li>
        <li className='p-2 m-1 border-start text-white'>Contact Us</li>
      </ul>
      <p className='text-white'>Copyright &copy; Joybuy</p>
    </div>
  );
}

export default Footer;
