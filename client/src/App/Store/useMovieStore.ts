import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { MovieResult } from '@/Typing/MovieType'
export interface State {
  movies: MovieResult[]
  suggestedMovies: MovieResult[]
  querySearch: MovieResult[]
}
export interface Action {
  setData: (data: MovieResult[]) => void
}

export const useMovieStore = create(
  persist<State & Action>(
    (set, _get) => ({
      movies: [],
      suggestedMovies: [],
      querySearch: [],
      setData: (data: MovieResult[]) => set(state => ({ ...state, querySearch: data })),
    }),
    {
      name: 'store-movie',
    },
  ),
)
