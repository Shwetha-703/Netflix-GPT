import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLangCode } from '../utils/configSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { auth } from '../utils/firebase';
import { toggleGPTSearch } from '../utils/gptSlice';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store=>store.gpt.showGpt);
  const user = useSelector(store => store.user);
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      }).catch((error) => {
        navigate("/error");
      });   
  }

  const toggleGPT = () => {
    dispatch(toggleGPTSearch());
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLangCode(e.target.value));
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe(); // called when component unmounts
  }, []);

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black   z-10 flex justify-between' >
      <img alt='NETFLIX' className='w-52 m-2 ' src = {NETFLIX_LOGO}/>
      { user && (<div className='flex p-5'>
        {showGptSearch && (
            <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(o=> <option key={o.code} value={o.code}>{o.name}</option>)}
            </select>
            )
        }
        <button onClick={toggleGPT} className='bg-purple-700 w-32 h-13 m-2 p-2 rounded-md'>
            {showGptSearch ? "Home" : "GPT Search"}
        </button>
        <img alt ="user" src={user?.photoURL} className="p-1 m-1 w-14 h-14"/>
        <button className='text-white' onClick={handleSignOut}>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header
