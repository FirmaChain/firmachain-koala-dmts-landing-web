import styled from "styled-components";
import { GameDiamondIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const BouncingImage = styled.div`
    position: absolute;
    bottom: 10px;
    animation: bounce 1s infinite;
    image-rendering: pixelated;
    z-index: 1;

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        ,
        50% {
            transform: translateY(-5px);
        }
        ,
        100% {
            transform: translateY(0);
        }
    }
`;

const Wrap = styled.div`
    width: 26px;
    height: 26px;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 13.3px;
        height: 13.3px;
    }
`;

const IconDiamond = () => {
    return (
        <BouncingImage>
            <Wrap>
                <ImageComponent src={GameDiamondIcon} alt={"DIAMOND"} />
            </Wrap>
        </BouncingImage>
    );
};

export default IconDiamond;
