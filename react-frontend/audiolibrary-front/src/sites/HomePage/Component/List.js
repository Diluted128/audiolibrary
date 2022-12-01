import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chips from './Chips'
import artist1 from './../../../images/artist1.jpg'
import artist2 from './../../../images/artist2.jpg'
import artist3 from './../../../images/artist3.jpg'
import artist4 from './../../../images/artist4.jpg'
import artist5 from './../../../images/artist5.jpg'
import artist6 from './../../../images/artist6.jpg'
import artist7 from './../../../images/artist7.jpg'
import artist8 from './../../../images/artist8.jpg'
import artist9 from './../../../images/artist9.jpg'
import Cookies from "js-cookie";
import {Link} from "react-router-dom";

function List() {
    let count = 0
    const artistList = [artist1,artist2,artist3, artist4, artist5, artist6,artist7,artist8 , artist9] 
    
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
                setArtists(data)
            });
    }, [])

    return(
        <Box>
            <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px"}}>
                Poznaj naszych artystów
            </Typography>
            <Box sx={{display: 'flex', m: '10px', flexWrap: 'wrap', width: 1}}>
            {artists.map(artist => (
                <Link to={"/artist"} state={{"artist": artist}}>
                    <Chips count={count++} data={artist} artist={artistList}/>
                </Link>
            ))}
            </Box>
        </Box>
    )
}
export default List;