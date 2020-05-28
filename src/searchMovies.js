import React, {useState} from 'react'

export default function SearchMovies() {

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        

        const api_key = process.env.API_KEY

        const url = `http://www.omdbapi.com/?i=tt3896198&apikey={api_key}&query=${query}&page=1`

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log('Response', api_key, url, data)
            setMovies(data.results)
        }catch(err) {
            console.error(err)
        }
    }

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
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className = "card--image" 
                            src ={`http://img.omdbapi.com/?i=tt3896198&h=600&apikey={api_key}${movie.poster_path}`}
                            alt ={movie.title + ' poster'}
                            />
                        <div className ='card-content'>
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>Rating: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>    
                    </div>
                ))}
            </div>

        </>
    )
}