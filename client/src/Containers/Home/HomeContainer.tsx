import { queryActionMovie, queryComedyMovie, queryDiscoverMovie, queryDocumentaryMovie, queryHorrorMovie, queryRomanceMovie, queryTopRated, queryTrendingMovie } from '@/App/hooks/useMovies';
import Banner from '@/Components/Banner/Banner';
import Navbar from '@/Components/NavBar/NavBar';
import Row from '@/Components/Row/Row';


const HomeContainer = () => {

  return (
    <>
      <Navbar />
      <Banner />
      <main className="max-w-screen-2xl mx-auto">
        <Row rowID='1' title='Suggested Trending' queryFn={queryDiscoverMovie} />
        <Row rowID='2' title='Top Rated Trending' queryFn={queryTopRated} />
        <Row rowID='3' title='Action Trending' queryFn={queryActionMovie} />
        <Row rowID='4' title='Comedy Trending' queryFn={queryComedyMovie} />
        <Row rowID='5' title='Horror Trending' queryFn={queryHorrorMovie} />
        <Row rowID='6' title='Romance Trending' queryFn={queryRomanceMovie} />
        <Row rowID='7' title='Documental Trending' queryFn={queryDocumentaryMovie} />
        {/* <MayLikeProducts /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomeContainer;
