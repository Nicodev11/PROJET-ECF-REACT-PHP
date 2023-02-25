import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;