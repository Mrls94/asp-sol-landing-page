import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './Menu/SideBar/SideBar'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Jsp7Erp from './Jsp7Erp/Jsp7Erp'

function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/jsp7erp" component={Jsp7Erp} />
      </div>
    </div>
  );
}

export default App;
