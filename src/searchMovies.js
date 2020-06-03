import React, {useState} from 'react'
import MovieCard from './movieCard.js'

export default function SearchMovies() {

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        

        const api_key = process.env.REACT_APP_API_KEY

        const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${query}&page=1`

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovies(data.Search)
        }catch(err) {
            console.error(err)
        }
    }
console.log(movies)
    return (
        <>
            <form className = "form" onSubmit= {searchMovies}>
                <label className = 'label' htmlFor ='query'>Movie Name</label>
                <input 
                    type= 'text' 
                    className = 'input' 
                    placeholder ='i.e. The Godfather' 
                    value ={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    />        
                <button className ='btn' type ='submit'>Search</button>
            </form>

            <div className = "card-list">
                {console.log(movies)}
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>

        </>
    )
}