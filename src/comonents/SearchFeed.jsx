import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {fetchFromAPI} from "./utils/fetchAPI";
import { Videos } from "../comonents"

const SearchFeed = () => {

    const [Video, setVideo] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideo(data.items)
        })
    }, [searchTerm]);

    // dependency arr : mean useEffect run when page reaload


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            {/* Videos components display */}
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>

                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                 Result for:  <span style={{ color: "#FC1503" }}> {searchTerm} </span>videos
                </Typography>

                <Videos vid={Video} />
            </Box>
        </Stack>
    );
};

export default SearchFeed;