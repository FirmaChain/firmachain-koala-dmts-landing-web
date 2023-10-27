import styled from "styled-components";
import { FooterBackgroundImage, FooterExternalArrowHoverIcon, FooterExternalArrowIcon } from "../../constants/assets";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${FooterBackgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
`;
export const FooterBox = styled.div`
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`;

export const MobileDivider = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 1px;
    background-color: #101721;
    opacity: 0.1;
    display: none;
    z-index: 2;

    @media only screen and (max-width: 1180px) {
        display: block;
    }
`;

export const Divider = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 1px;
    background-color: #00034a;
    opacity: 0.1;
    display: block;

    @media only screen and (max-width: 1180px) {
        display: none;
    }
`;

export const TopBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 90px 0 70px;

    @media only screen and (max-width: 1180px) {
        flex-direction: column;
        padding: 55px 0px 0;
    }
`;

export const ExternalContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 1180px) {
        justify-content: space-between;
        padding: 0 0 50px;
    }
`;

export const ExternalBox = styled.div`
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 34px;
`;

export const ExternalWrap = styled.div`
    width: auto;
    display: flex;
`;

export const Wrap = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    cursor: pointer;
    opacity: 0.65;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export const ExternalTypo = styled.p`
    color: #101721;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

    @media only screen and (max-width: 1180px) {
        font-size: 15px;
    }
`;

export const ContactBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 1180px) {
        align-items: center;
        justify-content: center;
        padding: 32px 0 24px;
    }
`;

export const ContactWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 1180px) {
        align-items: center;
    }
`;

export const ContactTitle = styled.p`
    color: #656565;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media only screen and (max-width: 1180px) {
        display: none;
    }
`;

export const SocialWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 22px;
`;

export const ContactURI = styled.p`
    color: #656565;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 1180px) {
        font-size: 14px;
    }
`;

export const BottomBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 28px;

    @media only screen and (max-width: 1180px) {
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        padding: 0 0 66px;
    }
`;

export const BottomWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 23px;

    @media only screen and (max-width: 1180px) {
        justify-content: center;
        flex-direction: column;
        gap: 8px;
    }
`;

export const InfoTypo = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #656565;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    cursor: pointer;
    opacity: 0.4;

    @media only screen and (max-width: 1180px) {
        white-space: pre;

        > span {
            display: none;
        }
    }
`;
