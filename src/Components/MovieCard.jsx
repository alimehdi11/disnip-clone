import React from 'react'
const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const MovieCard = ({movie}) => {
  return (
    <>
        <img src={`${imgBaseUrl}${movie.poster_path}`} className='w-40 md:w-60 rounded-lg hover:border-[3px] duration-150 ease-in border-gray-400 hover:scale-110 cursor-pointer '/>
    </>
  )
}

export default MovieCard