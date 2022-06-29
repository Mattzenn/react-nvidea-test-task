import './App.css';
import React from 'react';
import GameCardList from './components/GameCardList/GameCardList';
import mainApi from "../src/utils/MainApi"
import SearchForm  from './components/SearchForm/SearchFrom';

function App() {
  // хранение значений импута
  const [isinputvalue, setIsinputvalue] = React.useState('');
  // все игры для отображения
  const [games, setGames] = React.useState([]);
  const [arrgames, setArrGames] = React.useState([]);
  const [savegames, setSaveGames] = React.useState([]);

  function handleKeyword(value) {
    setIsinputvalue(value)
  }

  React.useEffect(() => {
    mainApi
        .getAllCard()
        .then((data) => {
          setGames(data)
          setArrGames(data)
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);

  function handleButton() {
    function findGames(game, keyword) {
      return game.title.toLowerCase().includes(keyword.toLowerCase())
    }

    return arrgames.filter((game) => {
        return findGames(game, isinputvalue);
    })
  }

  function handleSaveGames(game) {
    setSaveGames([...savegames, game]);
    localStorage.setItem('favoritegames', JSON.stringify(savegames));
    let savecards = JSON.parse(localStorage.getItem('favoritegames'))
    console.log(savecards)
  }

  return (
    <div className="App">
      <div className="body">
        <div>
        <SearchForm isinputvalue={handleKeyword} searchArr={setGames} submit={handleButton} />
        <GameCardList cards = { games } savecards = {savegames} saveGame={handleSaveGames} />
        </div>
      </div>
    </div>
  );
}

export default App;
