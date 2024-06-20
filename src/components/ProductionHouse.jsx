import React from 'react';
import { productionHouseData } from '../data/productionHouseData';

export default function ProductionHouse() {
  return (
    <div className='flex items-center gap-2 md:gap-5 p-2 px-5 md:px-16 '>
      {productionHouseData.map((item) => (
        <div key={item.id} className='border-[2px] border-white rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out relative shadow-xl shadow-gray-900'>
          <img src={item.image} alt={`production house ${item.id}`} className='w-full z-[1]'/>
          <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-80'/>
        </div>
      ))}
    </div>
  );
}