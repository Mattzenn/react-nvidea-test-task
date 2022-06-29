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

  // const [isNewArr, setNewArr] = React.useState([games]);


  function handleKeyword(value) {
    setIsinputvalue(value)
  }


  React.useEffect(() => {
    mainApi
        .getAllCard()
        .then((data) => {
          setGames(data)
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);


  function handleButton() {

    function findGames(game, keyword) {
      return game.title.toLowerCase().includes(keyword.toLowerCase())
    }

    return games.filter((game) => {
          return findGames(game, isinputvalue);
    })

  }



  return (
    <div className="App">
      <div className="body">
        <div>
        <SearchForm isinputvalue={handleKeyword} searchArr={setGames} submit={handleButton} />
        <GameCardList cards = { games } />
        </div>
      </div>
    </div>
  );
}

export default App;
