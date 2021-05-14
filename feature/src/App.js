import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import video from './pages/video';
import instagram from './pages/instagram';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/video' component={video} />
        <Route path='/instagram' component={instagram} />
      </Switch>
    </Router>
  );
}

export default App;