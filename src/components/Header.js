import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      }).catch((error) => {
        navigate("/error");
      });   
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
          const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between' >
      <img alt='NETFLIX' className='w-52 m-2' src = {NETFLIX_LOGO}/>
      { user && (<div className='flex p-5'>
        <img alt ="user" src={user?.photoURL} className="p-1 m-3 w-14 h-14"/>
        <button className='text-white' onClick={handleSignOut}>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header
