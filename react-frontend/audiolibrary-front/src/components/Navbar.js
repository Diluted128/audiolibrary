import React from "react";
import "../stylesheets/Navbar.scss"
import heartIcon from "../images/heart.png"
import homeIcon from "../images/home.png"
import addIcon from "../images/add.png"
function Navbar() {
    return(
        <div className={"navbar"}>
            <div className={"navbar__navbar-item"}>
                <img src={homeIcon}/>
                <a href="/">Home</a>
            </div>
            <div className={"navbar__navbar-item"}>
                <img src={heartIcon}/>
                <a href="/favourites">Favourites</a>
            </div>
            <div className={"navbar__navbar-item"}>
                <img src={addIcon}/>
                <a href="/add-playlist">Add playlist</a>
            </div>
            <div className={"navbar__line"}></div>
            <div className={"navbar__playlist"}>
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