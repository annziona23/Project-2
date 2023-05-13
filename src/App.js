
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import React from 'react';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      
        
       
    </Routes>
  </BrowserRouter>
      
      
    </div>
  );
}

export default App;
