import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import './css/products/WomensWear.css';
import './css/Screens/ProductScreen.css';
>>>>>>> 2483d35cd0494144229afe1dbb84da953f8fb3d1
import Navbar from './Navigators/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import MensWear from './pages/productsPage/MensWear';
import Shoes from './pages/productsPage/Shoes';
import Watches from './pages/productsPage/Watches';
import WomensWear from './pages/productsPage/WomensWear';
import WomensProductScreen from './pages/productsPage/productscreens/WomensProductScreen'

function App() {
  return (
    <Router>
    <div>
     <Navbar/>
     <Route exact path="/" component={Home}/>
<<<<<<< HEAD
    </div>
    </Router>
=======
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     
     {/*Products links*/}
     <Route path="/MensWear" component={MensWear}/>
     <Route path="/Shoes" component={Shoes}/>
     <Route path="/Watches" component={Watches}/>
     <Route path="/WomensWear" component={WomensWear}/>

     {/*product screens */}
     <Route path="/Product/:id" component={WomensProductScreen}/>
    </div>
    <CustomFooter/>
    </Router>
    
>>>>>>> 2483d35cd0494144229afe1dbb84da953f8fb3d1
  );
}

export default App;
