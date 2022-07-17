import React from 'react';
import Nav from '../Navigations/Nav';
import Nav2 from '../Navigations/Nav2';

function SigngUpLogin() {
  return (
    <div>
      <Nav />
      <Nav2 />
      <div className='loginSignup pb-5 '>
        <div className='me-5 ms-auto'>
          <form className='w-100  bg-white'>
            <h3 className='mt-4 mb-4 w-75 mx-auto'>Login</h3>
            <div class='form-group mb-4 w-75 mx-auto'>
              <label for='formGroupExampleInput'>Account </label>
              <input
                type='text'
                class='form-control '
                id='formGroupExampleInput'
                placeholder='Please Enter Your Email'
              />
            </div>
            <div class='form-group mt-4 w-75 mx-auto'>
              <label for='formGroupExampleInput2'>Password</label>
              <input
                type='text'
                class='form-control '
                id='formGroupExampleInput2'
                placeholder='Please Enter Your Password'
              />
              <p className='my-2'>Forget Password?</p>
            </div>
            <button className='btn btn-danger mb-5 w-75 ms-5 border-round'>
              Login
            </button>
          </form>
        </div>
        <div className='me-4'>
          <form className='w-100 bg-white'>
            <h3 className='mt-4 mb-4 w-75 mx-auto'>Register</h3>
            <div class='form-group mb-4 w-75 mx-auto'>
              <label for='formGroupExampleInput'>Email Address </label>
              <input
                type='text'
                class='form-control '
                id='formGroupExampleInput'
                placeholder='Please Enter Your Email'
              />
            </div>
            <div class='form-group mt-4 w-75 mx-auto'>
              <label for='formGroupExampleInput2'>Create a Password</label>
              <input
                type='text'
                class='form-control '
                id='formGroupExampleInput2'
                placeholder='Please Enter Your Password'
              />
              <p className='my-2'>Forget Password?</p>
            </div>
            <button className='btn btn-danger mb-5 w-75 ms-5 border-round'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigngUpLogin;
