import React from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa";
export default function Movie(props) {
    const [like,setLike] = React.useState(false)
    function handleLike() {
        return(
        setLike(prev => !prev)
        )
    }
    return (
        <div className="mv">
                <div className="movieBoxes">
                    <img className = "movieImg"src={`https://image.tmdb.org/t/p/w500/${props.movie? props.backdrop_path: undefined}`}></img>
                    <div class="middle">
                        <div class="text">{props.title}</div>
                        {like == false && <p className="likeBut" onClick={handleLike}><FaRegHeart></FaRegHeart></p>}
                        {like == true && <p className="likeBut" onClick={handleLike}><FaHeart></FaHeart></p>}
                    </div> 
                </div>
        </div>
    )
}