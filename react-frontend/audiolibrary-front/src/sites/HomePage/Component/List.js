import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chips from './Chips'
import artist1 from './../../../images/artist1.jpg'
import artist2 from './../../../images/artist2.jpg'
import artist3 from './../../../images/artist3.jpg'
import artist4 from './../../../images/artist4.jpg'
import artist5 from './../../../images/artist5.jpg'
import artist6 from './../../../images/artist6.jpg'
import artist7 from './../../../images/artist7.jpg'
import artist8 from './../../../images/artist8.jpg'
import artist9 from './../../../images/artist9.jpg'

const artistTab = []

function List() {
    let count = 0
    const artistList = [artist1,artist2,artist3, artist4, artist5, artist6,artist7,artist8 , artist9]
    return(
        <Box>
            <Typography mt={2} ml={5} sx={{color: 'white', fontSize: "40px"}}>
                Poznaj naszych artystów
            </Typography>
            <Box sx={{display: 'flex', m: '10px', flexWrap: 'wrap', width: 1 }}>
            {artistList.map(el =>(<Chips count={count++} artist={artistList}/>))}
            </Box>
        </Box>
    )
}
export default List;