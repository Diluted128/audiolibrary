import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTime from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function OneSong(props) {
    return(
            <Grid container sx={{color: 'gray', fontSize: 15, pt: 1, pb: 1}}>
                <Grid item xs={0.5} sx={{display: 'flex', justifyContent: 'center',  alignContent: 'center'}}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            {props.counter}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                   <Box sx={{ml:0.5}}>
                   <Typography sx={{color: 'white', fontSize: "15px"}}>
                        {props.title}
                    </Typography>
                    <Typography sx={{color: 'gray', fontSize: "12px"}}>
                        <CheckBoxIcon sx={{width: '18px', height: '18px'}}/> {props.firstname} {props.lastname}
                    </Typography>
                   </Box>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'gray', fontSize: "15px", mt: 1}}>
                            1,123
                    </Typography>
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