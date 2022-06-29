import './GameCardList.css'
import React from "react";
import GameCard from '../GameCard/GameCard';

export default function GameCardList({ cards, savecards, saveGame}) {

    return (
        <section className="items">
            <ul className="game__cardlist">
                {cards.map((game) => (
                    <GameCard game={game} savecards={savecards} key={game.id} description={game.descriptionShort} title={game.title} image={game.photoUrl} saveGame={saveGame}/>
                ))}
            </ul>
        </section >
    )
}