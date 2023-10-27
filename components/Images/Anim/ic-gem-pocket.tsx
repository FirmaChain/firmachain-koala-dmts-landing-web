import styled from "styled-components";
import { GameGemPocketIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 46px;
    height: 46px;
    position: relative;
    image-rendering: pixelated;
`;

const IconGemPocket = () => {
    return (
        <Wrap>
            <ImageComponent src={GameGemPocketIcon} alt={"GEM POCKET"} />
        </Wrap>
    );
};

export default IconGemPocket;
