import './SearchForm.css'
import React from "react";



function SearchForm({ isinputvalue, searchArr, submit }) {

    function handleSearchChange(e) {
        console.log(e.target.value)
        isinputvalue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        searchArr([])
            const arrGames = submit();
        searchArr(arrGames);
        console.log(arrGames);
    }

    return (
        <section className="searchform">
            <div className="searchform__container">
                <form className="searchform__main">
                    <input className="searchform__input" placeholder="Поиск по играм" type="text" minLength={2} maxLength={40} required onChange={handleSearchChange}/>
                    <button type="submit" className="searchform__button" onClick={handleSubmit}>кнопка</button>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;