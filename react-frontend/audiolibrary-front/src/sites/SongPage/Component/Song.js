import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import skoda from '../../../images/skoda.png'
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongList from "./SongList";




function Song() {

    const [isFavorite, setIsFavorite] = useState(false);

    const changeFavorite = () =>{
        if(isFavorite == false){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }

    return(
        <Box sx={{backgroundColor: 'rgb(0, 0, 0, 0.1)', width: 1 }}>
            <Box sx={{p: 4, display: 'flex', width: 1}}>
                <CardMedia
                    sx={{height: 200, width: 200}}
                    component="img"
                    height="40"
                    width='40'
                    image={skoda}
                    alt="green iguana"
                />
                <Box sx={{ height: 10, width: '90%'}}>
                    <Typography mt={3} ml={5} sx={{color: 'white', fontSize: "40px"}}>
                        Michal Filip
                    </Typography>
                    <Typography mt={2} ml={5} sx={{color: 'gray', fontSize: "15px"}}>
                        Single · 2022 · 1 song
                    </Typography>
                    <PlayCircleIcon sx={{width: 50, height: 50, ml: 3, mt: 3, color: 'white'}}/>
                    {/* <FavoriteBorder sx={{width: 35, height: 35, ml: 2, mt: 3, color: 'gray'}}/> */}
                    {isFavorite ? 
                            <FavoriteIcon onClick={changeFavorite} sx={{width: 35, height: 35, ml: 2, mt: 3, color: 'green'}}/>
                    : 
                            <FavoriteBorder onClick={changeFavorite} sx={{width: 35, height: 35, ml: 2, mt: 3, color: 'gray'}} /> }

                    <ArrowCircleDown sx={{width: 35, height: 35, ml: 2, mt: 3, color: 'gray'}}/>
                    <MoreHorizIcon sx={{width: 35, height: 35, ml: 2, mt: 3, color: 'gray'}}/>
                </Box>
            </Box>
            <SongList/>
        </Box>
    )
}
export default Song;