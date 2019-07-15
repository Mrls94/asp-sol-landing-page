import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        Copyright © { new Date().getFullYear()} ASPSolution All rights reserved
      </div>
    )
  }
}

export default Footer