import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/langConstants'

const GPTSearchBar = () => {
  const langChosen = useSelector(store=>store.config.langCodeSelected);
  return (
    <div className='pt-[5%] flex justify-center'>
        <form onSubmit={e=>e.preventDefault()} className="w-1/2 bg-black grid grid-cols-12">
            <input className='col-span-9 p-4  m-4' type="text" placeholder={lang[langChosen].gptplaceholder}/>
            <button className='bg-purple-700 col-span-3 py-2 px-4    text-white rounded m-4'>
                {lang[langChosen].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar
