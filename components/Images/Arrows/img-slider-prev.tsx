import { useState } from "react";
import { TechSliderPrevButtonDisabled, TechSliderPrevButtonEnabled, TechSliderPrevButtonEnabledHover } from "../../../constants/assets";
import styled from "styled-components";
import ImageComponent from "../ImageComponent";

const PrevBox = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0px;
    top: calc(50% + 60px);
    transform: translate(-50%, -50%);
    z-index: 2;

    @media only screen and (max-width: 1180px) {
        width: 40px;
        height: 40px;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const PrevWrap = styled.div`
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

const ImageSliderPrev = ({ enabled, onClick }: IProps) => {
    const [hover, setHover] = useState(false);

    return (
        <PrevBox onClick={enabled ? onClick : () => null} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: enabled ? "pointer" : "default" }}>
            <PrevWrap>
                <Wrap $visible={enabled === false}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderPrevButtonDisabled} alt={"PREV DISABLED"} />
                    </ImageWrap>
                </Wrap>
                <Wrap $visible={enabled === true && hover === false}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderPrevButtonEnabled} alt={"PREV"} />
                    </ImageWrap>
                </Wrap>
                <Wrap $visible={enabled === true && hover === true}>
                    <ImageWrap>
                        <ImageComponent src={TechSliderPrevButtonEnabledHover} alt={"PREV HOVER"} />
                    </ImageWrap>
                </Wrap>
            </PrevWrap>
        </PrevBox>
    );
};

export default ImageSliderPrev;
