import React, {useState, useEffect} from "react";
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
import Cookies from "js-cookie";
import {useLocation} from "react-router-dom";

function HomePage() {

    const location = useLocation();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3507/artist/' + location.state.artist.id + "/albums", {
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
                setAlbums(data)
            });
    }, [])

    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
                <div style={{ backgroundImage: `url(${scena2})`, width: '100vw', height:'300px', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div style={{paddingTop: '120px'}}>
                        <Typography sx={{color: 'white', ml: 3, fontSize: 95}}>{location.state.artist.firstname} {location.state.artist.lastname}</Typography>
                        <Typography sx={{color: 'white', ml: 3, fontSize: 12}}>Slucha 100 osob</Typography>
                    </div>            
                </div>
                <Box sx={{display: 'flex'}}>
                    <PlayCircleIcon color='success' sx={{width: 50, height: 50, ml: 3, mt: 2}}/>
                    <Button size="small" variant="outlined" sx={{height: 30, mt: 3, ml: 2, color: 'white', borderColor: 'white'}}>Follow</Button>
                    <MoreHorizIcon sx={{width: 30, height: 30, ml: 3, mt: 3, color: 'white'}}/>
                </Box>
                <Box sx={{display: 'flex', mt: 6, justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'white', ml: 3, fontSize: 25}}>Popular</Typography>
                    <Typography sx={{color: 'white', ml: 3, fontSize: 25}}>Liked Song</Typography>
                </Box>
                { albums.length === 0 ? <Typography sx={{color: 'white', ml: 3, fontSize: 20, mt: 15}}>There aren't any albums yet</Typography> :
                    albums.map((album) => (
                        <Song data={album}/>
                ))}
            </div>
        </div>
    )
}
export default HomePage;