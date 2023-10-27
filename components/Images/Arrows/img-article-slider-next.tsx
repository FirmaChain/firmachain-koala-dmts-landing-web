import styled from "styled-components";
import { ArticleSliderButtonEnabledHover, ArticleSliderButtonEnabled, ArticleSliderButtonDisabled } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";
import { useMemo, useState } from "react";

const NextWrap = styled.div`
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

const ImageWrap = styled.div<{ $visible: boolean }>`
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

const ImageArticleSliderNext = ({ enabled, onClick }: IProps) => {
    const [hover, setHover] = useState(false);

    return (
        <NextWrap onClick={enabled ? onClick : () => null} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: enabled ? "pointer" : "default" }}>
            <Wrap>
                <ImageWrap $visible={enabled === false}>
                    <ImageComponent src={ArticleSliderButtonDisabled} alt={"PREV DISABLED"} />
                </ImageWrap>
            </Wrap>
            <Wrap>
                <ImageWrap $visible={enabled === true && hover === false}>
                    <ImageComponent src={ArticleSliderButtonEnabled} alt={"PREV"} />
                </ImageWrap>
            </Wrap>
            <Wrap>
                <ImageWrap $visible={enabled === true && hover === true}>
                    <ImageComponent src={ArticleSliderButtonEnabledHover} alt={"PREV HOVER"} />
                </ImageWrap>
            </Wrap>
        </NextWrap>
    );
};

export default ImageArticleSliderNext;
