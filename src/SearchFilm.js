import React, {useState} from 'react'

export default function SearchFilms() {

    const [query, setQuery] = useState('')

    const [films, setFilms] = useState([])

    const searchFilms = async (e) => {
        e.preventDefault()
        

        

        const url = `https://api.themoviedb.org/3/movie/550?api_key=c5d507f4560f331eca8c1fc7672be73c&language=en-US&query=${query}&page=1&include_adult=false`

        try {

            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setFilms(data.results)
        }catch(err) {
            console.error(err)
        }
    }

    return (
        <form className = "form" onSubmit= {searchFilms}>
            <label className = 'label' htmlFor ='query' >Film Name</label>
            <input 
                type= 'text' 
                className = 'input' 
                placeholder ='i.e. The Godfather' 
                value ={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
        
            <button className ='btn' type ='submit'>Search</button>
        </form>
    )
}