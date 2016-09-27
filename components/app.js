import React, { Component } from 'react'
import Navbar from './navbar'
import Card from './card'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      user: {
        userImage: 'http://placekitten.com/200/300',
        name: 'Bob'
      },
      lists: [
        {
          title: 'In Progress Tasks',
          cards: [
            {
              title: 'Clean Office',
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
      <div>
        <Navbar />
        <Card />
      </div>
    )
  }

}

export default App
