import styled from "styled-components";
import { GameKoalaIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

const IconKoala = () => {
    return (
        <Wrap>
            <ImageComponent src={GameKoalaIcon} alt={"KOALA KNIGHT"} />
        </Wrap>
    );
};

export default IconKoala;
