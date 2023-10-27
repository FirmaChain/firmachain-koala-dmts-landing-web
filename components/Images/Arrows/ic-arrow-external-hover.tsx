import styled from "styled-components";
import { ExternalArrowHoverIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
`;

const IconExternalArrowHover = () => {
    return (
        <Wrap>
            <ImageComponent src={ExternalArrowHoverIcon} alt={"EXTERNAL"} />
        </Wrap>
    );
};

export default IconExternalArrowHover;
