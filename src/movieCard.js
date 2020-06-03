import React from 'react'

export default function MovieCard({movie}) {


    return (
        <div className="card" >
            <img className = "card--image" 
            src = {movie.Poster}
                
                alt ={movie.title + ' poster'}
                />
            <div className ='card--content'>
                <h3 className="card--title">{movie.Title}</h3>
                <p><small>RELEASE Year: {movie.Year}</small></p>
                {/* <p><small>Rating: {movie.vote_average}</small></p> */}
                <p className="card--desc"><small> Description:{movie.Plot}</small></p>
            </div>    
        </div>
    )
}