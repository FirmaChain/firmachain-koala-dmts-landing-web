import styled from "styled-components";
import { GameBoxIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 46px;
    height: 46px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

const IconBox = () => {
    return (
        <Wrap>
            <ImageComponent src={GameBoxIcon} alt={"JEWEL BOX"} />
        </Wrap>
    );
};

export default IconBox;
