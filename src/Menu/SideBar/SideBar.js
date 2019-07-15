import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './SideBar.css'
import logo from '../assets/nosotros_1-15.png'
import hamburger from '../assets/nosotros_1-16.png'
import instagram from '../assets/nosotros_1-17.png'
import facebook from '../assets/nosotros_1-18.png'
import youtube from '../assets/nosotros_1-19.png'
import searchIcon from '../assets/nosotros_1-20.png'

class SideBar extends Component {
  render(){
    return (
      <div className="sidebar">
        <nav>
          <div>
            <Link to="/">
              <img className="logo-img" src={logo}></img>
            </Link>
          </div>
          <div><img src={hamburger}/></div>
          <div className="lower-icons">
            <div className="social-icons-container">
              <img className="social-icon" src={instagram}></img>
              <img className="social-icon" src={facebook}></img>
              <img className="social-icon" src={youtube}></img>
            </div>
            <div>
            <img className="social-icon" src={searchIcon}></img>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default SideBar