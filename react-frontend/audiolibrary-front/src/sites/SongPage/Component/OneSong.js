import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function OneSong(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    const changeFavorite = () =>{
        if(isFavorite == false){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }

    return(
            <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center',  alignContent: 'center'}}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            1
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                   <Box sx={{ml:0.5}}>
                   <Typography sx={{color: 'white', fontSize: "15px"}}>
                        {props.temat}
                    </Typography>
                    <Typography sx={{color: 'gray', fontSize: "12px"}}>
                        <CheckBoxIcon sx={{width: '18px', height: '18px'}}/> Foushee, Lil Uzi Vert
                    </Typography>
                   </Box>
                </Grid>
                <Grid item xs={2.5}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            1,123
                    </Typography>
                </Grid>
                <Grid item xs={0.5}>
                    {isFavorite ? 
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            <FavoriteIcon onClick={changeFavorite} sx={{color: 'green'}}/>
                    </Typography> 
                    : 
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            <FavoriteBorder onClick={changeFavorite}/>
                    </Typography> }
                </Grid>
                <Grid item xs={0.5}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            3:15
                    </Typography>
                </Grid>
                <Divider />
            </Grid>
    )
}
export default OneSong;