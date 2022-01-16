import React from 'react';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='add' element={ <Add /> } />
        <Route path='edit/:id' element={ <Edit /> } />
      </Routes>
    </Router>
  );
}

export default App;
