import React from 'react';
import './App.css';
import CardList from './CardList/CardList'
import Profile from './Profile/Profile'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Media App!!!!!</h1>
      </header>
      <CardList />
      <footer>
        <span>Copyright 2019</span>
      </footer>
    </div>
  );

}

export default App;
