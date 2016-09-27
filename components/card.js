import React from 'react'

class Card extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h4> {this.props.title}</h4>
        <p> Priority Level: {this.props.label}</p>
        <p> Assigned to: {this.props.assignTo}</p>
        <p> Due Date: {this.props.dueDate}</p>
      </div>
    )
  }
}

export default Card
