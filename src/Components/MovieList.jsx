import React, { useEffect, useState ,useRef } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import GlobalApi from './Services/GlobalApi'
import MovieCard from './MovieCard';
import LargeMovieCard from './LargeMovieCard';

const MovieList = ({genereId,index}) => {

const [movieList, setMovieList] = useState([]);

const elementRef = useRef();

const slideLeft = (element) =>{
element.scrollLeft -= 400 ;
}

const slideRight = (element) =>{
element.scrollLeft += 400;
}
useEffect(()=>{
getMoviesByGenreId()
},[])

    const getMoviesByGenreId = () =>{
        GlobalApi.getMoviesByGenreId(genereId).then(res=>{
            setMovieList(res.data.results)
        })
    }
  return (
    <div className='relative'>
         <HiOutlineChevronLeft
        className={`hidden md:block text-white text-3xl absolute ${index%3==0?"top-[35%]":"top-[45%]"} left-7 z-10 cursor-pointer `}
        onClick={() => slideLeft(elementRef.current)}
      />
      <HiOutlineChevronRight
        className={`hidden md:block text-white text-3xl absolute ${index%3==0?"top-[35%]":"top-[45%]"} right-12 z-10 cursor-pointer `}
        onClick={() => slideRight(elementRef.current)}
      />
    <div className='flex overflow-x-auto scrollbar-hide gap-2 md:gap-8 scroll-smooth px-4 py-6 ' ref={elementRef}>
        {movieList.map(item=>(

     index%3==0 ?<LargeMovieCard movie={item}/> : <MovieCard movie={item}/>
        ))}
    </div>
    </div>
  )
}

export default MovieList