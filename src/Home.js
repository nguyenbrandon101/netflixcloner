import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Row from "./Row";
import requests from "./Request";

export default function home() {
    return (
        <div>
            <Main/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row
            title = "UpComing"
            fetchData = {requests.requestUpcoming}
            />
            <Row
            title = "Popular"
            fetchData = {requests.requestPopular}
            />
            <Row
            title = "Trending"
            fetchData = {requests.requestTrending}
            />
            <Row
            title = "Top Rated"
            fetchData = {requests.requestTopRated}
            />
            <Row
            title = "Horror"
            fetchData = {requests.requestHorror}
            />   
        </div>
    )
}