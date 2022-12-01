import React from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/HomePage.scss"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Song from "./Component/Song";


function SongPage() {
    return(
        
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
                <Song/>
            </div>
        </div>
    )
}
export default SongPage;