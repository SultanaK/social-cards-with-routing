import React from 'react'
import Card from '../Card/Card'

class CardList extends React.Component {



  render() {
    return (
      <div className='CardList'>
          {this.props.cards.map((card)=>{
              return (
                  <Card
                    {...card}
                    key={card.id}
                    handleClick={this.props.addLike}
                    handleDelete={this.props.deleteCard}
                  />
              )

          })}
      </div>
    )
  }


}

export default CardList
