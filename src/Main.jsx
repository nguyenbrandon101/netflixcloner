import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import requests from "./Request";


export default function Main() {
    const [movies,setMovies] = React.useState({})
    React.useEffect(async() => {
        /**Displaying the most popular movies */
        const response = await fetch(requests.requestPopular)
        if (response.ok) {
            const data = await response.json()
            setMovies(data.results)
        }
    }, [requests.requestPopular])
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    /** Getting a random movie to display on the home page screen */
    return (
        <div className="homeScreening">
            <div className="headerSec">
                <div className="imgSec">
                    <img className="homeImg" src={`https://image.tmdb.org/t/p/original/${randomMovie? randomMovie.backdrop_path: undefined}`}></img> 
                </div>
                <div className="headerImgInfo">
                    <h1>{randomMovie ? randomMovie.title: undefined}</h1>
                    <button className="playBut">Play</button>
                    <button className="watchBut">Watch Later</button>
                    <h2> Released {randomMovie ? randomMovie.release_date: undefined}</h2>
                    <p>{randomMovie ? randomMovie.overview: undefined}</p>
                </div>
            </div>
        </div>
    )
}