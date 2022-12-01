import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import OneSong from "../SongPage/Component/OneSong";
import Cookies from "js-cookie";

function PlaylistSongList(props) {

    let counter = 1;

    return(
        <Box sx={{backgroundColor: 'rgb(0, 0, 0, 0.1)', mt: 4}}>
            <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center'}}>
                    #
                </Grid>
                <Grid item xs={8}>
                    Title
                </Grid>
                <Grid item xs={3}>
                    Plays
                </Grid>
                <Grid item xs={0.5}>
                    <AccessTime/>
                </Grid>
                
            </Grid>
            <Divider sx={{backgroundColor: 'gray'}}/>
            {props.playlistData.map(el => <OneSong counter={counter++} title={el.title} firstname={el.firstname} lastname={el.lastname}/>)}
        </Box>
    )
}
export default PlaylistSongList;