import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import ErrorPage from './Pages/ErrorPage'; 
import './App.css';
import NotFound from './Components/NotFound';
import Terms from './Components/Terms';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/404' element={ <ErrorPage />}/>
      <Route path='/get-started' element={ <NotFound />}/>
      <Route path='/login' element={ <NotFound />}/>
      <Route path='/index.html' element={ <Terms />}/>
    </Routes>
  )
}

export default App