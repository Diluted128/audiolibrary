import React from "react";
import Navbar from "../components/Navbar"
import "../stylesheets/PlaylistPage.scss"
import {useLocation} from "react-router-dom";

function PlaylistPage() {

    const location = useLocation();

    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"homepage__content"}>
                <p>{location.state.playlist.name}</p>
            </div>
        </div>
    )
}
export default PlaylistPage;