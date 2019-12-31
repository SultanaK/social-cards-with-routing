import React from 'react'
import Card from '../Card/Card'


class CardList extends React.Component {

  state = {
    cards: [
      {
        id: "001",
        name: "Fuzzy",
        imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
        age: 5,
        description: "Lorem ipsum dolor sit amet",
        likes: 0,
      },
      {
        id: "002",
        name: "Chip",
        imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
        age: 3,
        description: "consectetur adipiscing elit",
        likes: 0,
      },
      {
        id: "003",
        name: "Banjo",
        imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
        age: 2,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        likes: 0,
      },
      {
        id: "004",
        name: "Flip",
        imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
        age: 6,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        likes: 0,
      }
    ]
  }

  addLike = (id) => {

    const newCardArray = this.state.cards.map((card) => {
      if (card.id === id) {
        card.likes += 1;
      }
      return card;
    })

    this.setState({
      cards: newCardArray
    })
  }

  deleteCard = (id) => {

    const newCardArray = this.state.cards.filter((card) => {
      return card.id !== id;
    })

    this.setState({
      cards: newCardArray
    })

  }

  render() {
    return (
      <div className='CardList'>
          {this.state.cards.map((card)=>{
              return (
                  <Card
                    {...card}
                    key={card.id}
                    handleClick={this.addLike}
                    handleDelete={this.deleteCard}
                  />
              )

          })}
      </div>
    )
  }


}

export default CardList
