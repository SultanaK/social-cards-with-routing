import React from 'react';
import './App.css';
import CardList from './CardList/CardList'
import { Route, Link, Switch } from 'react-router-dom'
import About from './About/About'
import Faq from './Faq/Faq'
import NotFound from './NotFound/NotFound'
import Profile from './Profile/Profile'


class App extends React.Component {

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
      <div className="App">
        <header className="App-header">
          <h1>Social Media App!!!!!</h1>
          <nav>
            <Link to="/">Home</Link>
            {' '}
            <Link to="/about">About</Link>
            {' '}
            <Link to ="/faq">Faq</Link>
          </nav>
        </header>

        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => {
              return <CardList cards={this.state.cards} deleteCard={this.deleteCard} addLike={this.addLike} />
            }} 
          />
          <Route exact path="/profile/:id" render={(routeProps) => {

            console.log(routeProps)
            
            const selectedCard = this.state.cards.find((card) => {
              return routeProps.match.params.id === card.id
            })

            return <Profile {...selectedCard} history={routeProps.history} deleteCard={this.deleteCard}/>
          }} />
          <Route exact path="/about" component={About} />
          <Route exact path='/faq' component={Faq}/>      
          <Route component={NotFound}/>
        </Switch>
  
        <footer>
          <span>Copyright 2019</span>
        </footer>
      </div>
    );
  }

}

export default App;
