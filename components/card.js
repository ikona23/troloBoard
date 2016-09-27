import React from 'react'

class Card extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h4> Title{this.props.title}</h4>
        <p> User {this.props.user}</p>
        <p> Label {this.props.label}</p>
        <p> Assign to{this.props.assignTo}</p>
        <p> Due Date{this.props.date}</p>
      </div>
    )
  }
}

export default Card
