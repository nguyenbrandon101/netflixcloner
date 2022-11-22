import React from "react";
import Main from "./Main";
import Row from "./Row";
import requests from "./Request";

export default function home() {
    return (
        <div>
            <Main/>
            <div className="space-between"></div>
            <Row
            rowId = "1"
            title = "UpComing"
            fetchData = {requests.requestUpcoming}
            />
            <Row
            rowId = "2"
            title = "Popular"
            fetchData = {requests.requestPopular}
            />
            <Row
            rowId = "3"
            title = "Trending"
            fetchData = {requests.requestTrending}
            />
            <Row
            rowId = "4"
            title = "Top Rated"
            fetchData = {requests.requestTopRated}
            />
            <Row
            rowId = "5"
            title = "Horror"
            fetchData = {requests.requestHorror}
            />   
        </div>
    )
}