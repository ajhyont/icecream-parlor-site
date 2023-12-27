import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/icecream-parlor-site/" exact Component={Home} />
        <Route path="/icecream-parlor-site/aboutUs" exact Component={AboutUs} />
        <Route path="/icecream-parlor-site/contact" exact Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
