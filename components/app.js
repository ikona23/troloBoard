import React, { Component } from 'react'
import Navbar from './navbar'
import Card from './card'

var divStyle = {
  color: 'black',
  fontSize:'1.2em',
  background: '#D1D5D8',
  textAlign: 'left',
  border:'1px solid black'
};


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      logo: 'http://www.softsciencewebmedia.com/images/WebTools_Trello.png',
      user: {
        userImage: 'http://placekitten.com/200/300',
        name: 'Bob'
      },
      lists: [
        {
          title: 'In Progress Tasks',
          cards: [
            {
              id: '1',
              title: 'Clean Office',
              label: 'Urgent',
              assignTo: ['Lisa','Peter'],
              dueDate: '29/09/16'
            },
            {
              id: '2',
              title: ' ',
              label: 'Urgent',
              assignTo: ['Lisa','Peter'],
              dueDate: '29/09/16'
            }
          ]
        }
      ]
    }
  }

  render () {
    return (
      <div style={divStyle}>
        <Navbar userImage={this.state.user.userImage} name={this.state.user.name} logo={this.state.logo}/>

      </div>
    )
  }

}

export default App
