import React from 'react'
import Slider from "../components/Slider";
import ProductionHouse from '../components/ProductionHouse';
import GenreMovie from '../components/GenreMovie';

export default function Home() {
  return (
    <main className=''>
        <Slider /> 
        <ProductionHouse />  
        <GenreMovie /> 
    </main>
  )
}
