import React from 'react'

class Navbar extends React.Component {
  render(){
    console.log('props from Navbar', this.props);
    return (
      <div>
        <img src={this.props.logo} />
        <img src={this.props.userImage} />
        <h4>Name: {this.props.name}</h4>
      </div>
    )
  }
}

export default Navbar
// import Navbar from Navbar
//
// exports Navbar
// import { Navbar } from Navbar
