import React from "react";
import Navbar from "../../components/Navbar"
import "../../stylesheets/HomePage.scss"
import Box from '@mui/material/Box';
import List from "./Component/List";

function HomePage() {
    return(
        <div className={"homepage"}>
            <Navbar/>
            <div className={"content"}>
            <Box
                sx={{
                    width: 1,
                    height: 300,
                    pl: 5,
                }}
            >
                <List/>
            </Box>

            </div>
        </div>
    )
}
export default HomePage;
