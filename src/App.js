import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import ErrorPage from './Pages/ErrorPage'; 
import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/404' element={ <ErrorPage />}/>
    </Routes>
  )
}

export default App