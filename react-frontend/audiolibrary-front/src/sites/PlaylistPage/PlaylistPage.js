import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/PlaylistPage.scss"
import {useLocation} from "react-router-dom";
import { useForm } from "react-hook-form";
import PlaylistSongList from "./PlaylistSongList";
import Cookies from "js-cookie";
import axios from "axios";

function PlaylistPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();

    const [tracks, setTracks] = useState([]);

    const responseContentDiv = document.getElementsByClassName("response-content")[0];

    const onSubmit = (data) => {
        const postBody = {
            trackName: data.trackName
        };

        console.log(location.state.playlist.id)
        console.log(data.trackName)
        
        axios.post('http://localhost:3506/playlist/' + location.state.playlist.id + '/track', postBody, {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('APItoken')}`,
                'Content-Type': 'application/json'
            }
        }).then((response, err) => {
            if (response.status === 200) {
                responseContentDiv.style.color = "green";
                responseContentDiv.innerHTML = "Utwór został dodany pomyślnie"
            }
        }).catch(function(error) {
            if (error.response.status === 400) {
                responseContentDiv.style.color = "red";
                responseContentDiv.innerHTML = "Nie można dodać utworu"
            }
        });
    }

    useEffect(() => {
        console.log('http://localhost:3506/playlist/' + location.state.playlist.id + "/tracks")
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
            
                <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <input className="input-playlist-name" {...register("trackName")} type="text" placeholder="Nazwa utworu"/>
                        <div className="response-content"></div>
                        <button className="submit-button" type="submit">Dodaj</button>
                    </form>
                <PlaylistSongList playlistData={tracks}/>
            </div>
        </div>
    )
}
export default PlaylistPage;