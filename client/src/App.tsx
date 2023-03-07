import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import DefaultPageContainer from '@/Containers/DefaultPage/DefaultPage';





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='*' element={<DefaultPageContainer/>} />
        <Route path='/' element={<HomePage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
