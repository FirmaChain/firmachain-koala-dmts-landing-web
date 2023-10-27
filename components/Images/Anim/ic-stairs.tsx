import styled from "styled-components";
import { GameStairsIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 88px;
    height: 32px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 59px;
        height: 21.5px;
    }
`;

const IconStairs = () => {
    return (
        <Wrap>
            <ImageComponent src={GameStairsIcon} alt={"Stairs"} />
        </Wrap>
    );
};

export default IconStairs;
