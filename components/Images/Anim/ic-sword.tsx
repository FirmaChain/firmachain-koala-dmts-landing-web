import styled from "styled-components";
import { GameSwordIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const SwingImage = styled.div`
    position: absolute;
    bottom: 10px;
    left: -15px;
    animation: swing 1s infinite;
    transform-origin: right bottom;
    image-rendering: pixelated;
    z-index: 1;

    @keyframes swing {
        0% {
            transform: rotate(0);
        }
        ,
        50% {
            transform: rotate(-30deg);
        }
        ,
        100% {
            transform: rotate(0);
        }
    }
`;

const Wrap = styled.div`
    width: 45px;
    height: 45px;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

const IconSword = () => {
    return (
        <SwingImage>
            <Wrap>
                <ImageComponent src={GameSwordIcon} alt={"SWORD"} />
            </Wrap>
        </SwingImage>
    );
};

export default IconSword;
