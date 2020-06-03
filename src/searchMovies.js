import React, {useState} from 'react'

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
                    <div className="card" key={movie.id}>
                        <img className = "card--image" 
                            src ={movie.Poster}
                            alt ={movie.title + ' poster'}
                            />
                        <div className ='card--content'>
                            <h3 className="card--title">{movie.Title}</h3>
                            <p><small>RELEASE DATE:{movie.Released}</small></p>
                            {/* <p><small>Rating: {movie.vote_average}</small></p> */}
                            <p className="card--desc">{movie.plot}</p>
                        </div>    
                    </div>
                ))}
            </div>

        </>
    )
}