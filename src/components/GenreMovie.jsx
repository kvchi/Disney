import React from 'react'
import { genreMovieData } from '../data/genreMovieData'
import MovieList from './MovieList'

export default function GenreMovie() {
  return (
    <div>
        {genreMovieData.slice(0,5).map((item,index)=>(
            <div key={item} className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>  
  )
}
