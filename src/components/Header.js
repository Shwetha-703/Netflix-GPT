import React from 'react';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10' >
      <img alt='NETFLIX' className='w-52 m-2' src = {NETFLIX_LOGO}/>
    </div>
  )
}

export default Header
