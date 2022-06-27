import './App.css';
import React from 'react';
import GameCardList from './components/GameCardList/GameCardList';
import mainApi from "../src/utils/MainApi"

function App() {

  const [games, setGames] = React.useState([]);

  function getStartCards() {
    //показываем все карточки из базы данных
    mainApi
        .getAllCard()
        .then((data) => {
          console.log(data);
          setGames(data)
        })
        .catch((err) => {
          console.log(err);
        })
  }

  getStartCards();

  return (
    <div className="App">
      <div className="body">
        <div>
        <GameCardList cards = { games } />
        </div>
      </div>
    </div>
  );
}

export default App;
