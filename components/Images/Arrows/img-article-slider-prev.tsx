import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import { useState } from "react";
import { ArticleSliderButtonDisabled, ArticleSliderButtonEnabled, ArticleSliderButtonEnabledHover } from "../../../constants/assets";

const PrevWrap = styled.div`
    z-index: 2;
    position: relative;
    width: 60px;
    height: 60px;

    @media only screen and (max-width: 1180px) {
        width: 40px;
        height: 40px;
    }
`;

const Wrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const ReverseWrap = styled.div<{ $visible: boolean }>`
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    position: relative;
    transition: all 0.2s ease-in-out;

    opacity: ${(props) => (props.$visible ? 1 : 0)};

    @media only screen and (max-width: 1180px) {
        width: 40px;
        height: 40px;
    }
`;

interface IProps {
    enabled: boolean;
    onClick: () => void;
}

const ImageArticleSliderPrev = ({ enabled, onClick }: IProps) => {
    const [hover, setHover] = useState(false);

    return (
        <PrevWrap onClick={enabled ? onClick : () => null} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: enabled ? "pointer" : "default" }}>
            <Wrap>
                <ReverseWrap $visible={enabled === false}>
                    <ImageComponent src={ArticleSliderButtonDisabled} alt={"PREV DISABLED"} />
                </ReverseWrap>
            </Wrap>
            <Wrap>
                <ReverseWrap $visible={enabled === true && hover === false}>
                    <ImageComponent src={ArticleSliderButtonEnabled} alt={"PREV"} />
                </ReverseWrap>
            </Wrap>
            <Wrap>
                <ReverseWrap $visible={enabled === true && hover === true}>
                    <ImageComponent src={ArticleSliderButtonEnabledHover} alt={"PREV HOVER"} />
                </ReverseWrap>
            </Wrap>
        </PrevWrap>
    );
};

export default ImageArticleSliderPrev;
