import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import { FooterExternalArrowHoverIcon } from "../../../constants/assets";

const ArrowImage = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
`;

const IconExternalArrow = () => {
    return (
        <ArrowImage>
            <ImageComponent src={FooterExternalArrowHoverIcon} alt={"EXTERNAL ARROW"} />
        </ArrowImage>
    );
};

export default IconExternalArrow;
