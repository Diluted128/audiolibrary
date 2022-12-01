import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import plyta2 from '../../../images/plyta2.jpg'
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



function OneFavourite() {
    

    return(
        <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center',  alignContent: 'center'}}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                        1
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{display: 'flex'}}>
                        <CardMedia
                            sx={{height: 60, width: 60}}
                            component="img"
                            height="40"
                            width='40'
                            image={plyta2}
                            alt="green iguana"
                        />
                        <Box sx={{ml:2, mt: 1}}>
                        <Typography sx={{color: 'white', fontSize: "15px"}}>
                                Baby Pluto
                            </Typography>
                            <Typography sx={{color: 'gray', fontSize: "12px"}}>
                                <CheckBoxIcon sx={{width: '18px', height: '18px'}}/> Lil Uzi Vert
                            </Typography>
                        </Box>
                   </Box>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                            Eternal Atake
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                            2 minutes ago
                    </Typography>
                </Grid>
                <Grid item xs={0.5}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                            3:15
                    </Typography>
                </Grid>
            </Grid>
    )
}
export default OneFavourite;