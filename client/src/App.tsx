import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import DefaultPageContainer from '@/Containers/DefaultPage/DefaultPage';
import MoviePage from './Pages/Movie/MoviePage';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='*' element={<DefaultPageContainer/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
