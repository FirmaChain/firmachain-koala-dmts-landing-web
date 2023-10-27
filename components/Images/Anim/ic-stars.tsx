import styled from "styled-components";
import { GameStarsIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 60px;
    height: 70px;
    position: relative;
    image-rendering: pixelated;
`;

const IconStars = () => {
    return (
        <Wrap>
            <ImageComponent src={GameStarsIcon} alt={"STARS"} />
        </Wrap>
    );
};

export default IconStars;
