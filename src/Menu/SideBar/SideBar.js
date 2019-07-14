import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './SideBar.css'
import logo from '../assets/nosotros_1-15.png'
import hamburger from '../assets/nosotros_1-16.png'

class SideBar extends Component {
  render(){
    return (
      <div className="sidebar">
        <nav>
          <div>
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </div>
          <div><img src={hamburger}/></div>
          <div>Lower icons</div>
        </nav>
      </div>
    )
  }
}

export default SideBar