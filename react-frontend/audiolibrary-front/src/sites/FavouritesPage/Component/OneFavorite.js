import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import skoda from '../../../images/skoda.png'
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



function OneFavourite(props) {
    

    return(
        <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center',  alignContent: 'center'}}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                        {props.index + 1}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{display: 'flex'}}>
                        <CardMedia
                            sx={{height: 60, width: 60}}
                            component="img"
                            height="40"
                            width='40'
                            image={skoda}
                            alt="green iguana"
                        />
                        <Box sx={{ml:2, mt: 1}}>
                        <Typography sx={{color: 'white', fontSize: "15px"}}>
                                {props.data.title}
                            </Typography>
                            <Typography sx={{color: 'gray', fontSize: "12px"}}>
                                <CheckBoxIcon sx={{width: '18px', height: '18px'}}/> Lil Uzi Vert
                            </Typography>
                        </Box>
                   </Box>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                        {props.data.type}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 2.5}}>
                        {props.data.views}
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