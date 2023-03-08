import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '@/Api/backend'
import { MovieResult, QueryType } from '@/Typing/MovieType'
const api_key = 'a0c35e004e9f725c6086e8f327c9ec23'

//const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&`)
export const fetchTrendingMovie = async () => {
  const { data } = await api.get<QueryType>(`/trending/all/day?api_key=${api_key}&language=en-US`)
  return data
}
export const fetchDiscoverMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}`)
  return data
}
export const fetchTopRated = async () => {
  const { data } = await api.get<QueryType>(`/movie/top_rated?api_key=${api_key}&language=en-US`)
  return data
}
export const fetchActionMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&with_genres=28`)
  return data
}
export const fetchComedyMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&with_genres=35`)
  return data
}
export const fetchHorrorMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&with_genres=27`)
  return data
}
export const fetchRomanceMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&with_genres=10749`)
  return data
}
export const fetchDocumentaryMovie = async () => {
  const { data } = await api.get<QueryType>(`/discover/movie?api_key=${api_key}&with_genres=99`)
  return data
}

export const fetchSearchMovie = async (ctx: QueryFunctionContext) => {
  if (ctx) {
    const [_, query] = ctx.queryKey
    const { data } = await api.get<QueryType>(`/search/movie?api_key=${api_key}&query=${query}`)
    return data
  } else {
    const { data } = await api.get<QueryType>(`/search/movie?api_key=${api_key}`)
    return data
  }
}
export const fetchMovieById = async (ctx: QueryFunctionContext) => {
  if (ctx) {
    const [_, query] = ctx.queryKey
    const { data } = await api.get<MovieResult>(`/movie/${query}?api_key=${api_key}`)
    return data
  } else {
    const { data } = await api.get<MovieResult>(`/movie/?api_key=${api_key}`)
    return data
  }
}

export const queryDiscoverMovie = () =>
  useQuery<QueryType>({
    queryKey: ['discoverMovies'],
    queryFn: fetchDiscoverMovie,
  })
export const queryTrendingMovie = () =>
  useQuery<QueryType>({
    queryKey: ['trendingMovies'],
    queryFn: fetchTrendingMovie,
  })

  export const queryTopRated = () =>
  useQuery<QueryType>({
    queryKey: ['topRatedMovies'],
    queryFn: fetchTopRated,
  })
export const queryActionMovie = () =>
  useQuery<QueryType>({
    queryKey: ['actionMovies'],
    queryFn: fetchActionMovie,
  })

export const queryComedyMovie = () =>
  useQuery<QueryType>({
    queryKey: ['comedyMovies'],
    queryFn: fetchComedyMovie,
  })

export const queryHorrorMovie = () =>
  useQuery<QueryType>({
    queryKey: ['horrorMovies'],
    queryFn: fetchHorrorMovie,
  })

export const queryRomanceMovie = () =>
  useQuery<QueryType>({
    queryKey: ['romanceMovies'],
    queryFn: fetchRomanceMovie,
  })

export const queryDocumentaryMovie = () =>
  useQuery<QueryType>({
    queryKey: ['documentaryMovies'],
    queryFn: fetchDocumentaryMovie,
  })

export const querySearchMovie = (query: string) =>
  useQuery<QueryType>({
    queryKey: ['searchMovies', query],
    queryFn: fetchSearchMovie,
    staleTime: 60000,
  })

export const queryMovieById = (query: string) =>
  useQuery<MovieResult>({
    queryKey: ['movieById', query],
    queryFn: fetchMovieById,
    staleTime: 60000,
  })
