import React from 'react';
import './App.css'
import Navbar from './Components/Layout/NavBar';
import Articles from './Components/Articles';
import Article1 from './Components/Pages/Article1';
import Article2 from './Components/Pages/Article2';
import Article3 from './Components/Pages/Article3';
import Article4 from './Components/Pages/Article4';
import Article5 from './Components/Pages/Article5';
import Article6 from './Components/Pages/Article6';
import Article7 from './Components/Pages/Article7';
import Article8 from './Components/Pages/Article8';
import HomePage from './Components/HomePage';
import Footer from './Components/Layout/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
         <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/articles" component={Articles} /> 
        <Route path="/article1" component={Article1} /> 
        <Route path="/article2" component={Article2} /> 
        <Route path="/article3" component={Article3} /> 
        <Route path="/article4" component={Article4} /> 
        <Route path="/article5" component={Article5} /> 
        <Route path="/article6" component={Article6} /> 
        <Route path="/article7" component={Article7} /> 
        <Route path="/article8" component={Article8} /> 
        
      </Switch>
      
        <Footer />
    </Router>
  );
}
 
export default App;
