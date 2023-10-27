import styled from "styled-components";
import { PixelLeftArrowIcon, PixelLeftArrowIconHover } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";
import { useState } from "react";

const ArroWrap = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`;

const Wrap = styled.div<{ $visible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

const ImageWrap = styled.div`
    width: 72px;
    height: 72px;
    position: relative;
    transition: all 0.2s linear;

    @media only screen and (max-width: 1180px) {
        width: 48px;
        height: 48px;
    }
`;

const IconPixelArrowLeft = () => {
    const [hover, setHover] = useState(false);

    return (
        <ArroWrap onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Wrap $visible={hover === false}>
                <ImageWrap>
                    <ImageComponent src={PixelLeftArrowIcon} alt={"PIXEL ARROW PREV"} />
                </ImageWrap>
            </Wrap>
            <Wrap $visible={hover === true}>
                <ImageWrap>
                    <ImageComponent src={PixelLeftArrowIconHover} alt={"PIXEL ARROW PREV"} />
                </ImageWrap>
            </Wrap>
        </ArroWrap>
    );
};

export default IconPixelArrowLeft;
