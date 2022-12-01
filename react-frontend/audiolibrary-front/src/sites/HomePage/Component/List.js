import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chips from './Chips'
import Cookies from "js-cookie";
import {Link, redirect} from "react-router-dom";

function List() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3507/artists', {
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
                setArtists(data)
            });
    }, [])

    return(
        <Box>
            <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px"}}>
                Poznaj naszych artystów
            </Typography>
            <Box sx={{display: 'flex', m: '30px', flexWrap: 'wrap', width: 1}}>
            {artists.map(artist => (
                <Link to={"/artist"} state={{"artist": artist}}>
                    <Chips data={artist}/>
                </Link>
            ))}
            </Box>
        </Box>
    )
}
export default List;