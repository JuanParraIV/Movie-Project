import { queryDiscoverMovie } from '@/App/hooks/useMovies';
import React from 'react'
import Movie from '../Movie/Movie';
import Row from '../Row/Row';

const MovieFeed: React.FC = () => {
  const { data, isLoading } = queryDiscoverMovie();


  if(isLoading) return (<>Loading...</>)
  if(data) return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-62 mx-auto'>
      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
      <div className="md:col-span-full">
      </div>
      {/* {data?.results.slice(5,data?.results.length).map(({id}) => (
        <>{id}</>
      ))} */}
    </div>
  )
  return null
}

export default MovieFeed
