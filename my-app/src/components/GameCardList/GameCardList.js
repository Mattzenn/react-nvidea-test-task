import './GameCardList.css'
import React from "react";
import GameCard from '../GameCard/GameCard';

export default function GameCardList({ cards }) {

    return (
        <section className="items">
            <ul className="game__cardlist">
                {cards.map((game) => (
                    <GameCard key={game.id} description={game.descriptionShort} title={game.title} image={game.photoUrl}/>
                ))}
            </ul>
        </section >
    )
}