import React from "react";
import Movie from "./Movie";
/** FaReg = unlike FaHeart = like */
import { FaHeart, FaRegHeart, FaArrowLeft,FaArrowRight} from "react-icons/fa";
export default function Row(props) {
    const [movies,setMovies] = React.useState([])
    React.useEffect(async() => {
        const response = await fetch(props.fetchData)
        if (response.ok) {
            const data = await response.json()
            setMovies(data.results)
        }
    },[props.fetchData])
    function sliderRight() {
        let slider = document.getElementById("slider" + props.rowId)
        slider.scrollLeft = (slider.scrollLeft + 500)

    }
    
    function sliderLeft() {
        let slider = document.getElementById("slider" + props.rowId)
        slider.scrollLeft = (slider.scrollLeft - 500)
    }
    return (
        <div className="genreSec">
            <h1 className="genreTitle">{props.title}</h1>
            <div className="movie-section">
                <FaArrowLeft className="leftIcon" onClick={sliderLeft}></FaArrowLeft>
                <div id={"slider" + `${props.rowId}`} className ="slider">
                    {movies.map((movie,id) => (
                        <Movie 
                        key={id} 
                        movie = {movie} 
                        title = {movie.title}
                        backdrop_path = {movie.backdrop_path}
                        />
                    ))}
                </div>
                <FaArrowRight className="rightIcon" onClick={sliderRight}></FaArrowRight>
            </div>
        </div>
    )
}