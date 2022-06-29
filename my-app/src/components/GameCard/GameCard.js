import './GameCard.css'
import React from "react";

function GameCard({ game, savecards, description, title, image, saveGame }) {

    const [like, setLike] = React.useState(false);

    function putLike() {
        saveGame(game)
        setLike(true)
    }

    return (
        <li className="game__card">
            <img className="game__card-image" src={image} alt={title}/>
            <div className="game__container">
                <h2 className="game__card-title">{title}</h2>
                <p className="game__card-description">{description}</p>
            </div>
            <button type="button" className={like === true ? "movies__card-button movies__card-button_type_true" : "movies__card-button movies__card-button_type_false"} onClick={putLike}>Лайк</button>
        </li>
    )
}

export default GameCard;