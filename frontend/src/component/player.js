import React from "react";
import YouTube from 'react-youtube';

export default function Player(props) {
    const opts = {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
        },
    };

    return(
        <YouTube videoId={props.vid} opts={opts}/>
    );
};