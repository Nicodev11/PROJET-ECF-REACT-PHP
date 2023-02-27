import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/forms/Login';
import Header from './components/Navigation';
import Contact from './pages/Contact';
import ErrorRouter from './pages/ErrorRouter';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NewUser from './pages/NewUser';
import Restaurant from './pages/Restaurant';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/restaurant' element={ <Restaurant />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/se-connecter' element={<SignIn />} />
        <Route path='/Nouvel-utilisateur' element={<NewUser />} />
        <Route path='*' element={<ErrorRouter />} />
      </Routes>
    </div>
  );
};

export default App;