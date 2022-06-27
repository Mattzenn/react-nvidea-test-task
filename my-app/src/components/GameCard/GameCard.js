import './GameCard.css'

import React from "react";

function GameCard({ description, title, image }) {
    return (
        <li className="game__card">
            <img className="game__card-image" src={image} alt={title}/>
            <div className="game__container">
                <h3 className="game__card-title">{title}</h3>
                <p className="game__card-description">{description}</p>
            </div>
        </li>
    )
}

export default GameCard;