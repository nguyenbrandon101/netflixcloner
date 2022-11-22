import React from 'react'
/** FaReg = unlike FaHeart = like */
import {FaArrowLeft,FaArrowRight} from "react-icons/fa";
import { db} from "./firebase";
import { onSnapshot,doc,updateDoc } from "firebase/firestore";
import { getAuth,onAuthStateChanged } from "firebase/auth";
const Savedshows = (props) => {

    const [movies,setMovies] = React.useState([])
    /*const [currEmail,setCurrEmail] = React.useState()*/
    const auth = getAuth();
    let currEmail
    
    React.useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                currEmail = user.email
                onSnapshot(doc(db, "users", currEmail), (doc) => {
                    setMovies(doc.data().savedShows);
                })
            } 
          })
    },[currEmail])

    /*onSnapshot(doc(db, "users", props.currEmail), (doc) => {
        console.log("Current data: ", doc.data());
    });*/


    console.log(movies)


    function sliderRight() {
        let slider = document.getElementById("slider" )
        slider.scrollLeft = (slider.scrollLeft + 500)

    }

    function sliderLeft() {
        let slider = document.getElementById("slider")
        slider.scrollLeft = (slider.scrollLeft - 500)
    }
  return (
    <div className="genreSec">
        <h1 className="genreTitle">My Shows</h1>
        <div className="movie-section">
            <FaArrowLeft className="leftIcon" onClick={sliderLeft}></FaArrowLeft>

            <div id={"slider"} className ="slider">
                {movies.map((movie) => (
                        <div className="mv">
                        <div className="movieBoxes">
                            <img className = "movieImg"src={`https://image.tmdb.org/t/p/w500/${movie.img? movie.img: undefined}`} alt=""></img>
                            <div class="middle">
                                <div class="text">{movie.title}</div>
                            </div> 
                        </div>
                </div>
                ))}
            </div>

            <FaArrowRight className="rightIcon" onClick={sliderRight}></FaArrowRight>
        </div>
    </div>
  )
}

export default Savedshows