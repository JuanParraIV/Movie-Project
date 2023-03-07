import { create } from 'zustand'
import { persist } from 'zustand/middleware'


import { MovieResult } from '@/Typing/MovieType';
export interface State {
  movies: MovieResult[]
}
export interface Action {
  setData: (movies: MovieResult[]) => void;
}

export const useMovieStore = create(
  persist<State & Action>(
    (set, _get) => ({
      movies: [],
      setData: (movies: MovieResult[]) => set(state => ({ ...state, movies })),
    }),
    {
      name: 'store-movie',
    },
  ),
)
