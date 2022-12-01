import React from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/FavouritesPage.scss"
import Favourites from "./Component/Favorites";
import Typography from '@mui/material/Typography';

function FavouritesPage() {
    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
                <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px", mb: 6}}>
                    Twoje ulubione utwory
                </Typography>
                <Favourites/>
            </div>
        </div>
    )
}
export default FavouritesPage;