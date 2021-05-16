import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import Card from './pages/Card/card';
import Contact from './pages/Contact/contact';
import SignUp from './pages/SignUP/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/card' exact component={Card} />
        <Route path='/contact-us' exact component={Contact} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      
    </Router>
  );
}

export default App;