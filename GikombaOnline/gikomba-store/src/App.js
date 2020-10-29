import React from 'react';
import './App.css';
import Navbar from './Navigators/NavBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
    <div>
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route path="/AboutPage" component={AboutPage}/>
    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
