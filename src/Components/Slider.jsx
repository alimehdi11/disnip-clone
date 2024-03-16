import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import GlobalApi from './Services/GlobalApi';
const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const Slider = () => {
  const [movielist, setMovieList] = useState([]);
  const elementRef = useRef(null);

const slideLeft = (element) =>{
element.scrollLeft -= window.innerWidth - 110 ;
}

const slideRight = (element) =>{
element.scrollLeft += window.innerWidth - 110;
}


  useEffect(()=>{
    getTrendingMovies();
 },[]);

 const getTrendingMovies = () => {
      GlobalApi.getTrendingVideos.then((res) => {
        setMovieList(res.data.results);
      });
    };


  return (
    <div className='relative'>
         <HiOutlineChevronLeft
        className="hidden md:block text-white text-3xl absolute top-[45%] left-7 cursor-pointer"
        onClick={() => slideLeft(elementRef.current)}
      />
      <HiOutlineChevronRight
        className="hidden md:block text-white text-3xl absolute top-[45%] right-9 cursor-pointer"
        onClick={() => slideRight(elementRef.current)}
      />
      <div className='flex overflow-x-auto px-16 py-4 rounded-lg scrollbar-hide scroll-smooth' ref={elementRef}>
           {
            movielist.map((movie,ind)=>(
               <img
                src={`${imgBaseUrl}${movie.backdrop_path}`}
                className="min-w-full h-[400px] object-cover object-left-top mr-5 hover:border-[4px] duration-100 ease-in"
                key={ind}
                />
            ))
           }
      </div>
    </div>
  )
}

export default Slider