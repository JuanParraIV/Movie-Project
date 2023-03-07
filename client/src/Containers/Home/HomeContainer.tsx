import { queryDiscoverMovie, querySearchMovie } from '@/App/hooks/useMovies';


const HomeContainer = () => {
  //const { data, isLoading } = queryDiscoverMovie();
  //const { data, isLoading } = querySearchMovie('Ho');


/*   if (isLoading) return (<div>Loading...</div>);
  console.log(data); */

  return (
    <>
      {/* <Navbar /> */}
      <main className="max-w-screen-2xl mx-auto">
        {/* <Banner /> */}
        {/* <ProductsFeed /> */}
        {/* <MayLikeProducts /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomeContainer;
