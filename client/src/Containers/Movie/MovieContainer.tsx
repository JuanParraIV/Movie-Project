//import { Details } from '@/Components/Details/Detail';
//import Footer from '@/Components/Footer/Footer';
//import Navbar from '@/Components/Navbar/Navbar';
import { queryActionMovie, queryComedyMovie, queryDiscoverMovie, queryDocumentaryMovie, queryHorrorMovie, queryMovieById, queryRomanceMovie, queryTopRated, queryTrendingMovie } from '@/App/hooks/useMovies';
import Detail from '@/Components/Detail/Detail';
import Navbar from '@/Components/NavBar/NavBar';
import Row from '@/Components/Row/Row';
import { MovieResult } from '@/Typing/MovieType';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieContainer = () => {
  const { id } = useParams<Record<string, string>>();

  const { data } = queryMovieById(id || '');
  if (id) {
    console.log(data);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      {data ? <Detail item={data} /> : <p>Loading...</p>}
      <main className="max-w-screen-2xl mx-auto">
        <Row rowID='1' title='Suggested Trending' queryFn={queryDiscoverMovie} />
        <Row rowID='2' title='Top Rated Trending' queryFn={queryTopRated} />
        <Row rowID='3' title='Action Trending' queryFn={queryActionMovie} />
        <Row rowID='4' title='Comedy Trending' queryFn={queryComedyMovie} />
        <Row rowID='5' title='Horror Trending' queryFn={queryHorrorMovie} />
        <Row rowID='6' title='Romance Trending' queryFn={queryRomanceMovie} />
        <Row rowID='7' title='Documental Trending' queryFn={queryDocumentaryMovie} />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MovieContainer;
