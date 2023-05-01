import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import {fetchFromAPI} from "./utils/fetchAPI";
import { SideBar, Videos } from "../comonents"

const Feed = () => {
    const [slectCategory, setSlectCategory] = useState('New');
    const [Video, setVideo] = useState([]);
    for (const i of slectCategory) {
        console.log(i)
    }

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${slectCategory}`).then((data) => {
            setVideo(data.items)
        })
    }, [slectCategory]);

    // dependency arr : mean useEffect run when page reaload


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            {/* Side Bar display */}
            <Box sx={{height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

                <SideBar slectCategory={slectCategory} setSlectCategory={setSlectCategory} />

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                    Copyright © 2022 MCEMPTY
                </Typography>
            </Box>

            {/* Videos components display */}
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {slectCategory} <span style={{ color: "#FC1503" }}>videos</span>
                </Typography>

                <Videos vid={Video} />
            </Box>
        </Stack>
    );
};

export default Feed;