import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function Slider() {
  const screenWidth=window.innerWidth;
  const [movies, setMovies] = useState([]);
  const elementRef=useRef()
  useEffect(()=>{
      getTrendingMovies();
  },[])

  const getTrendingMovies = async () => {
    try {
      const response = await GlobalApi.getTrendingVideos();
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const sliderRight =(element)=> {
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft =(element)=> {
    element.scrollLeft-=screenWidth-110
  }
  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current  )}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}> 
      {movies.map((item)=>       
        <img key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[300px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-50 transition-all duration-100 ease-in-out '/>
      )}
       
    </div>
      </div>
  )
}

export default Slider
