import styled from "styled-components";
import { GameFirmachainIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 54px;
    height: 54px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 36px;
        height: 36px;
    }
`;

const IconFirmachainPixel = () => {
    return (
        <Wrap>
            <ImageComponent src={GameFirmachainIcon} alt={"FIRMACHIAN"} />
        </Wrap>
    );
};

export default IconFirmachainPixel;
