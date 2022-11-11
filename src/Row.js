import React from "react";
export default function Row(props) {
    const [movies,setMovies] = React.useState([])
    React.useEffect(async() => {
        const response = await fetch(props.fetchData)
        if (response.ok) {
            const data = await response.json()
            setMovies(data.results)
        }
    },[props.fetchData])
    console.log(movies)
    return (
        <div className="genreSec">
            <h1 className="genreTitle">{props.title}</h1>
            <div className="movie-section">
                {movies.map(movie => (
                    <>
                        <div className="movieBoxes">
                            <img className = "movieImg"src={`https://image.tmdb.org/t/p/w500/${movie? movie.backdrop_path: undefined}`}></img>
                            <div class="middle">
                                <div class="text">{movie.title}</div>
                            </div> 
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}