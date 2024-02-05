import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { NETFLIX_BG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
        <div className='fixed -z-10'>
            <img className='' alt="Netflix_BG" src={NETFLIX_BG}/>
        </div>
        <div className='pt-[15%]'>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
    </>
  )
}

export default GPTSearch
