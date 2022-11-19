import React from "react";
import "../stylesheets/Navbar.css"
import heartIcon from "../images/heart.png"
import homeIcon from "../images/home.png"
import addIcon from "../images/add.png"
function Navbar(props) {
    return(
        <div className={"navbar"}>
            <div className={"navbar-item"}>
                <img src={homeIcon}/>
                <a href="/home">Home</a>
            </div>
            <div className={"navbar-item"}>
                <img src={heartIcon}/>
                <a href="/favourites">Favourites</a>
            </div>
            <div className={"navbar-item"}>
                <img src={addIcon}/>
                <a href="/addplaylist">Add playlist</a>
            </div>
            <div className={"line"}></div>
            <div className={"playlist"}>
                <div>
                    <a href={"/playlist"}>Moja playlista1</a>
                </div>
                <div>
                    <a href={"/playlist"}>Moja playlista2</a>
                </div>
                <div>
                    <a href={"/playlist"}>Moja playlista3</a>
                </div>
                <div>
                    <a href={"/playlist"}>Moja playlista4</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;