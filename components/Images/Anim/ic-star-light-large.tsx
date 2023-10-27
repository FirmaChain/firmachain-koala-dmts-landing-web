import styled from "styled-components";
import { GameLightLargeIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const RotateImage = styled.div`
    animation: rotateY 4s linear infinite;

    @keyframes rotateY {
        to {
            transform: rotateY(360deg);
        }
    }
`;

const Wrap = styled.div`
    position: relative;
    width: 16px;
    height: 16px;
    image-rendering: pixelated;
`;

const IconStarLightLarge = () => {
    return (
        <RotateImage>
            <Wrap>
                <ImageComponent src={GameLightLargeIcon} alt={"STAR LIGHT"} />
            </Wrap>
        </RotateImage>
    );
};

export default IconStarLightLarge;
