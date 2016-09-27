import React from 'react'

class Navbar extends React.Component {
  render(){
    console.log('props from Navbar', this.props);
    return (
      <div>
        Hi I am the Navbar
      </div>
    )
  }
}

export default Navbar
// import Navbar from Navbar
//
// exports Navbar
// import { Navbar } from Navbar
