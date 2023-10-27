import { MainArrowIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";
import styled from "styled-components";

const ImageWrap = styled.div`
    position: absolute;
    bottom: 60px;
    animation: bounce 1s infinite;

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        ,
        50% {
            transform: translateY(-10px);
        }
        ,
        100% {
            transform: translateY(0);
        }
    }
`;

const Wrap = styled.div`
    width: 56px;
    height: 46px;
    position: relative;
`;

const IconArrowBottom = () => {
    return (
        <ImageWrap>
            <Wrap>
                <ImageComponent src={MainArrowIcon} alt={"ARROW"} />
            </Wrap>
        </ImageWrap>
    );
};

export default IconArrowBottom;
