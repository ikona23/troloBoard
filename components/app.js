import React, { Component } from 'react'
import Navbar from './navbar'
import Card from './card'
import List from './list'

var divStyle = {
  color: 'black',
  fontSize:'1.2em',
  background: '#D1D5D8',
  textAlign: 'left',
  border:'1px solid black'
};

var navBar = {
  color: 'blue',
  height: '150px',
  border:'1px solid black'
}

var img = {
  height: '10px',
  width: '50px',
  background:'red'
}


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
              title: 'Set up workspaces',
              label: 'Urgent',
              assignTo: ['Lisa','Peter'],
              dueDate: '29/09/16'
            }
          ]
        },
        {
          title: 'Awaiting Approval',
          cards: [
            {
              id: '1',
              title: 'Testing Sign off',
              label: 'Negotiable',
              assignTo: ['Andy', 'Anne'],
              dueDate: '25/10/16'
            },
            {
              id: '2',
              title: 'Write Specs',
              label: 'Urgent',
              assignTo: ['Francine', 'Billy-Bob'],
              dueDate: '25/10/16'
            },
            {
              id: '3',
              title: 'Spec Review Meeting',
              label: 'Negotiable',
              assignTo: ['Francine', 'Billy-Bob', 'Tanya'],
              dueDate: 'TBA'
            }
          ]
        }
      ]
    }
  }

  renderList () {
    return this.state.lists.map((list) => {
      console.log('list', list)
      return <div><List cards={list.cards} title={list.title}/></div>
    })
  }

  render () {
    return (
      <div style={divStyle}>
        <div style={navBar}>
          <Navbar userImage={this.state.user.userImage} name={this.state.user.name} logo={this.state.logo}/>
        </div>
          {this.renderList()}
      </div>

    )
  }

}

export default App
