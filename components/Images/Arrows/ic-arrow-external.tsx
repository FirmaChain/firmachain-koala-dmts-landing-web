import styled from "styled-components";
import { ExternalArrowIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
`;

const IconExternalArrow = () => {
    return (
        <Wrap>
            <ImageComponent src={ExternalArrowIcon} alt={"EXTERNAL"} />
        </Wrap>
    );
};

export default IconExternalArrow;
