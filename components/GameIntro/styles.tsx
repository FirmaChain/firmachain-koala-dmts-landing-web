import styled from 'styled-components';
import { DirectionType } from './carousel/desktop';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TopShape = styled.div`
  width: 100%;
  height: 190px;
  background-color: #fff;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 50% 100%, 0 0%);
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1180px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 38px;
  padding: 150px 0 40px;

  @media only screen and (max-width: 1180px) {
    padding: 95px 0 0;
    gap: 27px;
    margin-bottom: 6px;
  }
`;

export const ItroTypo = styled.p`
  color: #fcfefe;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.4;
  white-space: pre;

  @media only screen and (max-width: 1180px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 140%;
  }
`;

export const CarouselBox = styled.div`
  width: 790px;
  height: 490px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0 58px;

  @media only screen and (max-width: 1180px) {
    display: none;
  }
`;

export const ItemBox = styled.div`
  position: absolute;
  transition: all 0.5s ease-in-out;
`;

export const ArrowButton = styled.div<{ $position: 'LEFT' | 'RIGHT'; $isEndPoint: boolean }>`
  cursor: pointer;
  position: absolute;
  top: 40%;
  opacity: 1;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  ${(props) => props.$position === 'LEFT' && `left: -10px`};
  ${(props) => props.$position === 'RIGHT' && `right: -20px`};
  ${(props) => props.$isEndPoint && `opacity: 0; cursor: default`};
`;

export const ItemContainer = styled.div<{ $isCurrent: boolean; $direction: DirectionType }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  ${(props) =>
    props.$isCurrent
      ? `
        width: 790px;
        height: 490px;
        > div:nth-child(1) {
            margin-top: 5px;
            margin-left: 20px;
        }
    `
      : `
        width: 410px;
        height: 440px;

        > div:nth-child(1) {
            margin-top: 0;
            margin-left: 15px;
        }
    `}
`;

export const TitleWrap = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 28px;
  border: 1px solid #616161;
  background: #2c2d30;
  width: 219px;
  height: 56px;
  flex-shrink: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

export const TitleTypo = styled.p`
  color: #fff;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  opacity: 0.9;
`;

export const DescWrap = styled.div<{ $isCurrent: boolean }>`
  position: absolute;
  bottom: 0px;
  left: 50px;
  max-width: 656px;
  min-height: 73px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 28.5px;
  background: #2c2d30;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: all 0.5s linear;
  transform-origin: left bottom;
  overflow: hidden;
  z-index: 0;

  ${(props) =>
    props.$isCurrent
      ? `
            opacity: 1;
            > div {
                opacity: 1;
            }
    `
      : `
            opacity: 0;
            > div {
                opacity: 0;
            }
    `}
`;

export const DescTypo = styled.p`
  color: #fff;
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.6;
  padding: 15px 0;
  white-space: wrap;
  transition: all 0.3s ease-in-out;
`;

export const TwistedImage = styled.div<{ $isCurrent: boolean }>`
  transform: skew(-8deg);
  border-radius: 24px;
  z-index: 1;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.5s linear;

  ${(props) =>
    props.$isCurrent
      ? `
            width: 734px;
            height: 400px;
            margin-top: -10px;
            & > div {transform: skew(8deg) scale(1.07);}
    `
      : `
            width: 354px;
            height: 400px;
            margin-top: 0;
            & > div {transform: skew(8deg) scale(1.2);}

            > div: nth-child(1) {
            }
    `}
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  transform: skew(8deg) scale(1.07);
  border-radius: 24px;
  transition-duration: 0.4s;
  transition-delay: 0.1s;
  margin-right: auto;
  background-size: cover;
  background-position: center center;
`;

export const DimBox = styled.div<{ $isCurrent: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  transition: all 0.5s linear;
  ${(props) =>
    props.$isCurrent
      ? `
    opacity: 0;
    `
      : `
    opacity: 0.6;
    
    `};
`;

export const MobileCarouselBox = styled.div`
  width: 100%;
  position: relative;
  display: none;
  padding: 50px 0 50px;

  @media only screen and (max-width: 1180px) {
    display: block;
  }
`;

export const MobileSlideBox = styled.div`
  padding: 0 12px;
`;

export const MobileTitleWrap = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0px;
  border-radius: 28px;
  border: 1px solid #616161;
  background: #2c2d30;
  width: auto;
  padding: 10px 25px;
  flex-shrink: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s linear;
`;

export const MobileTitleTypo = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  opacity: 0.9;
`;

export const MobileSliderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: releative;
  padding: 30px 0 0;
`;

export const MobileSlideImageWrap = styled.div`
  width: 100%;
  min-height: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;

  @media only screen and (max-width: 1180px) {
    & > div {
      min-height: 350px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    & > div {
      min-height: 300px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    & > div {
      min-height: 250px !important;
    }
  }
`;

export const MobileArrowButton = styled.div<{ $position: 'LEFT' | 'RIGHT'; $isEndPoint: boolean }>`
  cursor: pointer;
  position: absolute;
  top: calc(50% + 10px);
  transform: translate(0, -50%);
  transition: all 0.5s ease-in-out;
  z-index: 2;
  ${(props) => props.$position === 'LEFT' && `left: 2px`};
  ${(props) => props.$position === 'RIGHT' && `right: 3px`};
  ${(props) => props.$isEndPoint && `opacity: 0; cursor: default`};
`;
