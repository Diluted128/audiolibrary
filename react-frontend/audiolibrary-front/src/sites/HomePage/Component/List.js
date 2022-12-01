import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chips from './Chips'

function List() {
    const artistList = ['skoda','kotek','kotek2', 4, 5]


    return(
        <Box>
            <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px"}}>
                Poznaj naszych artystów
            </Typography>
            <Box sx={{display: 'flex', m: '10px', flexWrap: 'wrap', width: 1 }}>
            {artistList.map(el =>(<Chips img={el}/>))}
            </Box>
        </Box>
    )
}
export default List;