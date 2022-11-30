import React from "react";
import Navbar from "../components/Navbar";
import "../stylesheets/AddPlaylistPage.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

const AddPlaylistPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const postPlaylistBody = {
            name: data.name,
        };

        const responseContentDiv = document.getElementsByClassName("response-content")[0];

        axios.post('http://localhost:3502/playlist', postPlaylistBody, {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('APItoken')}`,
                'Content-Type': 'application/json'
            }
        }).then((response, err) => {
            if (response.status === 200) {
                responseContentDiv.style.color = "green";
                responseContentDiv.innerHTML = "Playlista dodana pomyślnie"
            }
        }).catch(function(error) {
            if (error.response.status === 409) {
                responseContentDiv.style.color = "red";
                responseContentDiv.innerHTML = "Taka playlista już istnieje"
            }
        });
    }

    return(
        <div className="homepage">
            <Navbar/>
            <div className="content">
                <div className="add-playlist-content">
                    <h1 className="add-playlist-text">Add playlist</h1>
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <input className="input-playlist-name" {...register("name")} type="text" placeholder="Nazwa playlisty"/>
                        <div className="response-content"></div>
                        <button className="submit-button" type="submit">Dodaj</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPlaylistPage;