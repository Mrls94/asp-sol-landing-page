import React, { Component } from 'react'
import Footer from '../shared/Footer/Footer'
import ContactInfo from '../shared/ContactInfo/ContactInfo'

class About extends Component {
  render(){
    return (
      <div>
        About
        <ContactInfo />
        <Footer />
      </div>
    )
  }
}

export default About