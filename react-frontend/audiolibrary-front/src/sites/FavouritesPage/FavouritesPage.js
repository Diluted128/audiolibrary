import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/FavouritesPage.scss"
import Favourites from "./Component/Favorites";
import Typography from '@mui/material/Typography';
import Cookies from "js-cookie";

function FavouritesPage() {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3507/favourites', {
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
                console.log(data);
                setTracks(data)
            });
    }, [])

    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
                <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px", mb: 6}}>
                    Twoje ulubione utwory
                </Typography>
                <Favourites data={tracks}/>
            </div>
        </div>
    )
}
export default FavouritesPage;