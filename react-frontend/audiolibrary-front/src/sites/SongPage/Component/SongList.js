import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import OneSong from "./OneSong";

const songs = [1,2,3,4,5]

function SongList() {
    return(
        <Box sx={{backgroundColor: 'rgb(0, 0, 0, 0.1)'}}>
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
            {songs.map(el => <OneSong/>)}
        </Box>
    )
}
export default SongList;