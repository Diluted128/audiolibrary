import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OneFavourite from "./OneFavorite";

const track = [1,2,3,4,5]

function Favourites() {
    return(
        <Box>
            <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center',  alignContent: 'center'}}>
                    #
                </Grid>
                <Grid item xs={5}>
                   TITLE
                </Grid>
                <Grid item xs={3}>
                    ALBUM
                </Grid>
                <Grid item xs={3}>
                    DATE ADDED
                </Grid>
                <Grid item xs={0.5}>
                    <AccessTime/>
                </Grid>
            </Grid>
            <Divider sx={{backgroundColor: 'gray'}}/>
            {track.map(el=> <OneFavourite/>)}
        </Box>
    )
}
export default Favourites;