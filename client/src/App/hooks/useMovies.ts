import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '@/Api/backend'
import { QueryType } from '@/Typing/MovieType'
const api_key = 'a0c35e004e9f725c6086e8f327c9ec23'

export const fetchDiscoverMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}`)
  return data
}
export const fetchSearchMovie = async (ctx: QueryFunctionContext) => {
  if (ctx) {
    const [_,query]= ctx.queryKey;
    const { data } = await api.get<QueryType>(`/search/movie?api_key=${api_key}&query=${query}`)
    return data
  } else {
    const { data } = await api.get<QueryType>(`/search/movie?api_key=${api_key}`)
    return data
  }
}

export const queryDiscoverMovie = () => useQuery(['discoverMovies'], fetchDiscoverMovie, { staleTime: 60000 });

export const querySearchMovie = (query:string) => useQuery(['searchMovies', query ], fetchSearchMovie, { staleTime: 60000 })
