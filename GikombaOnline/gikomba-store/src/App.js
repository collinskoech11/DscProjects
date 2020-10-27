import React from 'react';
import './App.css';
import Navbar from './Navigators/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Route exact path="/" component={Home}/>
    </Router>
   <Home/>
    </>

  );
}

export default App;
