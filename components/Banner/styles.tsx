import styled from "styled-components";
import { BannerBackgroundImage } from "../../constants/assets";

export const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 315px;
    background-image: url(${BannerBackgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 135px;
    padding: 75px 60px;

    @media only screen and (max-width: 1180px) {
        height: auto;
        max-height: auto;
        flex-direction: column;
        gap: 20px;
        padding: 55px 60px 40px;
    }
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 28px;

    @media only screen and (max-width: 1180px) {
        gap: 15px;
    }
`;

export const DescTypo = styled.p`
    color: #fff;
    opacity: 0.5;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
        white-space: pre;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media only screen and (max-width: 768px) {
        gap: 35px;
    }
`;
