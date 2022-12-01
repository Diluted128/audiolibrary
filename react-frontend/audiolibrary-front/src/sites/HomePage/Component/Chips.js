import React from "react";
import Box from '@mui/material/Box';
import skoda from '../../../images/skoda.png'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import kotek from '../../../images/kotek.jpg'
import kotek2 from '../../../images/kotek2.jpg'


function Chips() {
    return(
        <Box onClick = {()=>(console.log('przechodze do nastepnej strony'))}
        sx={{
            minWidth: 200,
            height: 300,
            mr: '50px',
            borderRadius: "2%",
            boxShadow: '5px 5px 5px rgb(23, 23, 23)',
            backgroundColor: 'rgb(27, 27, 27, 0.4)',
            '&:hover': {
                backgroundColor: 'rgb(255, 255, 255, 0.1)',
              },
        }}
    >
        <Avatar sx={{width: 170, height: 170, m: 'auto', mt: '15px', borderRadius: "10%"}} alt="Remy Sharp" src={kotek2} />
        <Typography sx={{color: 'white', m: 1, fontSize: 25}}>Skoda Felicja</Typography>
        <Typography sx={{color: 'white', m: 0.5,fontSize: 10}}>skoda felicja to najzajebistrze auto jakie znam</Typography>
    </Box>
    )
}
export default Chips;