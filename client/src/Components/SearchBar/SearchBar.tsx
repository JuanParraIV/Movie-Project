import { fetchSearchMovie, querySearchMovie } from '@/App/hooks/useMovies';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { useMovieStore } from '@/App/Store/useMovieStore'
import { useQuery } from '@tanstack/react-query';
import queryClient from '@/QueryClient';

type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;
const SearchBar = () => {
  const { setData } = useMovieStore(state=>state)
  const [search, setSearch] = useState('');

  console.log("search", search)

  const { data } = querySearchMovie(search);
  const handleOnSearch = (event: InputEvent) => {
    const { value } = event.target;
    if (event && event.preventDefault) event.preventDefault();
    setSearch('');
    setSearch(value);
  };
  const handleSubmit = async (event: FormEvent) => {
    if (event && event.preventDefault) event.preventDefault();
    console.log(data)
    if(data) setData(data.results)
    setSearch('');
  };
  return (
    <form className='' action="" onSubmit={handleSubmit}>
      <div className="hidden sm:flex items-center justify-center h-10 rounded-md flex-grow cursor-pointer bg-red-600 hover:bg-red-500 w-[400px]">
        <input
          value={search}
          onChange={handleOnSearch}
          type="text"
          placeholder="Search for a movie..."
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
        />
        <button type='submit'>
          <StarIcon className="h-12 p-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
