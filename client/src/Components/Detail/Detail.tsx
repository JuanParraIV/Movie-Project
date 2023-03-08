import { MovieResult } from '@/Typing/MovieType';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';


const Detail = ({ item }: { item: MovieResult; }) => {
  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  const ratingStar = (rating: number) => {
    let star = rating;
    let stars = [];
    for (let i = 0; i < Math.floor(star); i++) {
      stars.push(<StarIcon className="h-5 text-yellow-500 " />);
    }
    return stars;
  };

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='relative w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          loading='lazy'
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className='absolute w-full top-[25%] p-4 md:p-8 md:px-16'>
          <h1 className='text-3xl md:text-5xl font-bold'>{item?.title}</h1>
          <div className="flex">
              {ratingStar(item?.vote_average)} <p className="text-xs text-gray-500">{item?.vote_average}</p>
            </div>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {item?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(item?.overview, 150)}

          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
