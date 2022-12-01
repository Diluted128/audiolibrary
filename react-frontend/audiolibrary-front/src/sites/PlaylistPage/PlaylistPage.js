import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/PlaylistPage.scss"
import {useLocation} from "react-router-dom";
import PlaylistSongList from "./PlaylistSongList";
import Cookies from "js-cookie";



function PlaylistPage() {

    const location = useLocation();

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        console.log('http://localhost:3506/playlist/' + location.state.playlist.id+ "/tracks")
        fetch('http://localhost:3506/playlist/' + location.state.playlist.id + "/tracks", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + Cookies.get('APItoken')
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTracks(data.tracks)
            });
    }, [location.state.playlist.name]);


    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"homepage__content"}>
                <p>{location.state.playlist.name}</p>
                <PlaylistSongList playlistData={tracks}/>
            </div>
        </div>
    )
}
export default PlaylistPage;