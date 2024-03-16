import React from 'react'
const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const LargeMovieCard = ({movie}) => {
  return (
     <section className='text-white hover:scale-110 duration-150 ease-in'>
    <img src={`${imgBaseUrl}${movie.backdrop_path}`} className='w-40 md:w-64 rounded-lg hover:border-[3px]  border-gray-400  cursor-pointer '/>
    <h2 className='w-40 md:w-64 mt-2'>{movie.title}</h2>
   </section>
  )
}

export default LargeMovieCard