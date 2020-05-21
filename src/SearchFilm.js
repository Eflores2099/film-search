import React from 'react'

export default function SearchFilms() {

    return (
        <form class = "form">
            <label  htmlFor ='query' className = 'label'>Film Name</label>
            <input type= 'text' className = 'input' placeholder ='i.e. The Godfather' ></input>
            <button className ='btn' type ='submit'>Search</button>
        </form>
    )
}