import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/portfolio/portfolio';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App"> 
          <div className="navbarSection">
            <div className='brand'>
                BoDy
            </div>
            <div className="collapse">
              <i className="fa fa-bars"></i>
            </div>
            <ul className='menu'>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='social-icon'>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-github"></i><br/>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-codepen"></i><br/>
                <i className="fa fa-google-plus"></i>
            </div>
          </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/skills' component={Skills} />
              <Route path='/contact' component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
