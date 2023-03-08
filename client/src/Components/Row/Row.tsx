import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from '../Movie/Movie';
import { queryDiscoverMovie } from '@/App/hooks/useMovies';
import {FireIcon} from '@heroicons/react/24/solid'
import { MovieResult, QueryType } from '@/Typing/MovieType';
import { UseBaseQueryResult } from '@tanstack/react-query';

type RowType={
  title:string
  rowID:string
  queryFn: () => UseBaseQueryResult<any, unknown>;
}
const Row = ({ title, rowID, queryFn }:RowType) => {
  const { data } = queryFn();

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <h2 className='flex gap-2 text-white font-bold md:text-xl py-4 mt-5'><FireIcon height={24}color='orange'/>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {data?.results.map((item :MovieResult) => (
            <Movie key={item.id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
