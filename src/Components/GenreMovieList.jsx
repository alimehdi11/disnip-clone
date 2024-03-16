import React from 'react'
import GenereList from './constant/GenereList'
import MovieList from './MovieList'
const GenreMovieList = () => {
  return (
    <div>
        {
     GenereList.genere.map((item,index)=> (
        <div key={index} className='p-8 md:px-16'>
            <h2 className='text-white text-2xl font-bold'>{item.name}</h2>
            <MovieList genereId={item.id} index={index}/>
        </div>
     ))
        }
    </div>
  )
}

export default GenreMovieList