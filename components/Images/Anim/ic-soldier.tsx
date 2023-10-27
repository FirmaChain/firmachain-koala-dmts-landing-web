import styled from "styled-components";
import { GameSoldierIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 85px;
    height: 56px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 56.6px;
        height: 37.3px;
    }
`;

const IconSoldier = () => {
    return (
        <Wrap>
            <ImageComponent src={GameSoldierIcon} alt={"STARS"} />
        </Wrap>
    );
};

export default IconSoldier;
