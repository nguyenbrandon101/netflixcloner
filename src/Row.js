import React from "react";
/** FaReg = unlike FaHeart = like */
import { FaHeart, FaRegHeart, FaArrowLeft,FaArrowRight} from "react-icons/fa";
export default function Row(props) {
    const [like,setLike] = React.useState(false)
    const [movies,setMovies] = React.useState([])
    React.useEffect(async() => {
        const response = await fetch(props.fetchData)
        if (response.ok) {
            const data = await response.json()
            setMovies(data.results)
        }
    },[props.fetchData])
    function handleLike() {
        return(
        setLike(prev => !prev)
        )
    }
    return (
        <div className="genreSec">
            <h1 className="genreTitle">{props.title}</h1>
            <div className="movie-section">
                <FaArrowLeft className="leftIcon"></FaArrowLeft>
                <div id={"slider"} className ="slider">
                    {movies.map(movie => (
                        <>
                            <div className="movieBoxes">
                                <img className = "movieImg"src={`https://image.tmdb.org/t/p/w500/${movie? movie.backdrop_path: undefined}`}></img>
                                <div class="middle">
                                    <div class="text">{movie.title}</div>
                                    {like == false && <p className="likeBut" onClick={handleLike}><FaRegHeart></FaRegHeart></p>}
                                    {like == true && <p className="likeBut" onClick={handleLike}><FaHeart></FaHeart></p>}
                                </div> 
                            </div>
                        </>
                    ))}
                </div>
                <FaArrowRight className="rightIcon"></FaArrowRight>
            </div>
        </div>
    )
}