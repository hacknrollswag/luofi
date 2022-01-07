import React, { Component } from "react";

export default class Player extends Component {

    render() {
        //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
        const videoSrc = "https://www.youtube.com/embed/OPf0YbXqDm0?autoplay=1";
        return (
        <div>
            <iframe
                width="100"
                height="100"
                src={videoSrc}
                frameBorder="0"
                allow="autoplay"
                title="youtube video"
            />
        </div>
        );
    }
}