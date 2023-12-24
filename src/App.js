import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/aboutUs" exact Component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;
