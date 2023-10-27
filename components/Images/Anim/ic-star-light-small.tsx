import styled from "styled-components";
import { GameLightSmallIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const RotateImage = styled.div`
    animation: rotateY 3s linear infinite;

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

const IconStarLightSmall = () => {
    return (
        <RotateImage>
            <Wrap>
                <ImageComponent src={GameLightSmallIcon} alt={"STAR LIGHT"} />
            </Wrap>
        </RotateImage>
    );
};

export default IconStarLightSmall;
