import React, { Component }  from 'react'
import Card from './card'



const List = (props) => {
  console.log('props in List', props)

  var cards = props.cards.map( (card) => {
    return <li><Card title={card.title} label={card.label} assignTo={card.assignTo} dueDate={card.dueDate}/></li>
  })

  return (
    <div>
        <h4>{props.title}</h4>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

export default List
