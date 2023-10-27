import styled from "styled-components";
import { MaskgroupImage, MaskgroupMobileImage } from "../../constants/assets";

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 100px 75px;

    @media only screen and (max-width: 768px) {
        padding: 126px 75px 365px;
    }
`;

export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0 0;

    @media only screen and (max-width: 768px) {
        gap: 30px;
    }
`;

export const SubTitleTypo = styled.p`
    color: #363636;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: pre;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ChainGroupContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    image-rendering: auto;
    background-image: url(${MaskgroupImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: 768px) {
        top: 80px;
        background-image: url(${MaskgroupMobileImage});
    }
`;

export const ChainGroupBox = styled.div<{ $scale: number }>`
    width: 100%;
    height: calc(100% - 20px);
    position: relative;
    transform: scale(${(props) => props.$scale});
`;

export const CenterLogoImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        transform: translate(-50%, calc(50% - 20px));
    }
`;
