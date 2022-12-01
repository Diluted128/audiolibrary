import React, {useState, useEffect} from "react";
import "../stylesheets/Navbar.scss"
import heartIcon from "../images/heart.png"
import homeIcon from "../images/home.png"
import addIcon from "../images/add.png"
import Cookies from "js-cookie"
import {Link} from "react-router-dom";

function Navbar() {

    const [playlists, setPlayLists] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3504/playlists', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + Cookies.get('APItoken')
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPlayLists(data)
            });
    }, [])

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
                {playlists.map((playlsit) => (
                    <div>
                        <Link to={"/playlist"} state={{"playlist": playlsit}}>{playlsit.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Navbar;