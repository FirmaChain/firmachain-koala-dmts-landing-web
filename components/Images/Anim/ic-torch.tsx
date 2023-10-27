import styled from "styled-components";
import { GameTorchIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 14px;
    height: 16px;
    position: relative;
    image-rendering: pixelated;

    @media only screen and (max-width: 768px) {
        width: 9px;
        height: 10px;
    }
`;

const IconTorch = () => {
    return (
        <Wrap>
            <ImageComponent src={GameTorchIcon} alt={"TORCH"} />;
        </Wrap>
    );
};

export default IconTorch;
