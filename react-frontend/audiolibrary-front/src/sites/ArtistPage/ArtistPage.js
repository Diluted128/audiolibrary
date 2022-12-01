import React from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/HomePage.scss"
import Box from '@mui/material/Box';
import scena2 from '../../images/scena2.jpg'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Song from "../SongPage/Component/Song"

function HomePage() {
    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
                <div style={{ backgroundImage: `url(${scena2})`, width: '100vw', height:'300px', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div style={{paddingTop: '120px'}}>
                        <Typography sx={{color: 'white', ml: 3, fontSize: 95}}>Skoda Felicja</Typography>
                        <Typography sx={{color: 'white', ml: 3, fontSize: 12}}>Slucha 100 osob</Typography>
                    </div>            
                </div>
                <Box sx={{display: 'flex'}}>
                    <PlayCircleIcon color='success' sx={{width: 50, height: 50, ml: 3, mt: 2,}}/>
                    <Button size="small" variant="outlined" sx={{height: 30, mt: 3, ml: 2, color: 'white', borderColor: 'white'}}>Follow</Button>
                    <MoreHorizIcon sx={{width: 30, height: 30, ml: 3, mt: 3, color: 'white'}}/>
                </Box>
                <Box sx={{display: 'flex', mt: 6, justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'white', ml: 3, fontSize: 25}}>Popular</Typography>
                    <Typography sx={{color: 'white', ml: 3, fontSize: 25}}>Liked Song</Typography>
                </Box>
                <Song/>
            </div>
        </div>
    )
}
export default HomePage;