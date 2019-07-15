import React, { Component } from 'react'
import Footer from '../shared/Footer/Footer'
import ContactInfo from '../shared/ContactInfo/ContactInfo'

class Home extends Component {
  render(){
    return (
      <div>
        Home
        <ContactInfo />
        <Footer />
      </div>
    )
  }
}

export default Home