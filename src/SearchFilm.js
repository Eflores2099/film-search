import React from 'react'

export default function SearchFilms() {

    const searchFilms = async (e) => {
        e.preventDefault()
        console.log("submitting")

        const query = "Jurassic Park"

        const url = `https://api.themoviedb.org/3/movie/550?api_key=c5d507f4560f331eca8c1fc7672be73c&language=en-US&query=${query}&page=1&include_adult=false`

        try {

            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        }catch(err) {
            console.error(err)
        }
    }

    return (
        <form className = "form" onSubmit= {SearchFilms}>
            <label className = 'label' htmlFor ='query' >Film Name</label>
            <input type= 'text' className = 'input' placeholder ='i.e. The Godfather' ></input>
            <button className ='btn' type ='submit'>Search</button>
        </form>
    )
}