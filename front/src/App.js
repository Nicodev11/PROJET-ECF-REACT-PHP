import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Navigation';
import Contact from './pages/Contact';
import ErrorRouter from './pages/ErrorRouter';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorRouter />} />
      </Routes>
    </div>
  );
};

export default App;