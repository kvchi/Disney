import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import HrMovie from './HrMovie';


export default function MovieList({genreId,index_}) {

    const [movieList, setMovieList] = useState([]);
    const screenWidth=window.innerWidth;
  const elementRef=useRef();



    useEffect(()=>{
        getMoviesByGenreId();
    }, [genreId]);

    const getMoviesByGenreId = () =>{
        GlobalApi.getMoviesByGenreId(genreId).then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        });
    };

    const sliderRight =(element)=> {
        element.scrollLeft+=screenWidth-110;
      };
      const sliderLeft =(element)=> {
        element.scrollLeft-=screenWidth-110;
      };
  return (
    <div className='relative'>
         <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8 ${index_%3==0?'mt-[80px] z-10': 'mt-[150px] cursor-pointer z-10'}`} onClick={()=> sliderLeft(elementRef.current)}/>
          <HiChevronRight className={`hidden md:block text-white text-[30px] absolute ${index_%3==0?'mt-[80px] z-10 right-0': 'mt-[150px] cursor-pointer right-0 z-10'}`} onClick={()=>sliderRight(elementRef.current  )}/>
    <div
    ref={elementRef} 
    className ='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
        {movieList.map((item) =>(
            <>
            {index_%3==0?<HrMovie movie ={item}/>:<MovieCard key={item.id} movie ={item} />}
            </>
            
        ))}
    </div>
    </div>
  )
}
