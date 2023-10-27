import styled from "styled-components";
import { GameControllerIcon } from "../../constants/assets";
import ImageComponent from "./ImageComponent";

const Wrap = styled.div`
    width: 90px;
    height: 90px;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 64px;
        height: 64px;
    }
`;

const IconGameController = () => {
    return (
        <Wrap>
            <ImageComponent src={GameControllerIcon} alt={"CONTROLLER"} />
        </Wrap>
    );
};

export default IconGameController;
