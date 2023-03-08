import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='flex items-center justify-between py-4 px-10 z-[100] sticky top-0 bg-zinc-900 shadow-md'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          Movie Project
        </h1>
      </Link>
      <div>
        <Link to='/login'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to=''>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            Sign Up
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
