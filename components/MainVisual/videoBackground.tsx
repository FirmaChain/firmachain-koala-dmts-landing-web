import { Fragment } from "react";
import { BottomShape, Video, VideoDim, VideoOverlay } from "./styles";
import { MainVisualVideo } from "../../constants/assets";

const VideoBackground = () => {
    return (
        <Fragment>
            <VideoOverlay>
                <Video loop autoPlay muted playsInline preload={"auto"} controls={false}>
                    <source src={MainVisualVideo} type={"video/mp4"} />
                </Video>
                <VideoDim $position={"bottom"} />
                <VideoDim $position={"top"} />
                <VideoDim $position={"left"} />
                <VideoDim $position={"right"} />
            </VideoOverlay>
            <BottomShape />
        </Fragment>
    );
};

export default VideoBackground;
