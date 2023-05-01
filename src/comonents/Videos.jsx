import React from 'react';
import {Stack, Box} from "@mui/material";
import {VideoCard, ChannelCard, Loader} from "./index";

const Videos = ({ vid }) => {

        if(!vid?.length) return <Loader />;

    return (
        <Stack direction="row" alignItems="start" justifyContent="start" flexWrap="wrap" gap={2}>
            {vid.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos
