import { useState } from "react";
import { TechSliderNextButtonEnabled, TechSliderNextButtonEnabledHover, TechSliderNextButtonDisabled } from "../../../constants/assets";
import styled from "styled-components";
import ImageComponent from "../ImageComponent";

const NextBox = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    right: 0px;
    top: calc(50% + 60px);
    transform: translate(50%, -50%);
    z-index: 2;

    @media only screen and (max-width: 1180px) {
        width: 40px;
        height: 40px;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const NextWrap = styled.div`
    position: relative;
`;

const Wrap = styled.div<{ $visible: boolean }>`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s ease-in-out;

    opacity: ${(props) => (props.$visible ? 1 : 0)};

    @media only screen and (max-width: 1180px) {
        width: 40px;
        height: 40px;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

interface IProps {
    enabled: boolean;
    onClick: () => void;
}

const ImageSliderNext = ({ enabled, onClick }: IProps) => {
    const [hover, setHover] = useState(false);

    return (
        <NextBox onClick={enabled ? onClick : () => null} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: enabled ? "pointer" : "default" }}>
            <NextWrap>
                <Wrap $visible={enabled === false}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderNextButtonDisabled} alt={"NEXT DISABLED"} />
                    </ImageWrap>
                </Wrap>
                <Wrap $visible={enabled === true && hover === false}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderNextButtonEnabled} alt={"NEXT"} />
                    </ImageWrap>
                </Wrap>
                <Wrap $visible={enabled === true && hover === true}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderNextButtonEnabledHover} alt={"NEXT HOVER"} />
                    </ImageWrap>
                </Wrap>
            </NextWrap>
        </NextBox>
    );
};

export default ImageSliderNext;
