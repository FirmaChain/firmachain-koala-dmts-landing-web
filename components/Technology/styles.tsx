import styled from 'styled-components';
import { StyledSlider } from '../StyledComponent';
export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 120px 0 45px;
  z-index: 2;

  @media only screen and (max-width: 1180px) {
    padding: 80px 0 55px;
  }

  @media only screen and (max-width: 768px) {
    padding: 65px 0 20px;
    flex-direction: column;
    gap: 0px;
  }
`;

export const TitleWrapWithCharacter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 0 80px 130px;
  z-index: 2;

  @media only screen and (max-width: 1180px) {
    max-width: 1180px;
    padding: 0 80px 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px 70px;
  }
`;

export const TabBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 985px;
  min-height: 59px;
  border-radius: 40px;
  border: 1px solid #ffac81;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s;
  transition-timing-function: ease-in;

  @media only screen and (max-width: 1180px) {
    max-width: 768px;
  }

  @media only screen and (max-width: 768px) {
    background-color: #fe691a20;
    max-width: 768px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fe691a30;
  }
`;

export const TabWrap = styled.div`
  position: absolute;
  width: calc(100% / 3);
  height: 100%;
  max-width: 330px;
  border-radius: 40px;
  opacity: 0.9;
  background: #fe691a;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1180px) {
    max-width: 256px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #cc4600;
  }
`;

export const TabTypoWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabTypo = styled.p<{ $selected: boolean }>`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;

  ${(props) =>
    props.$selected
      ? `
        color: #FFF;
    `
      : `
        color: #161719;
        opacity: 0.3;
    `}

  @media only screen and (max-width: 1180px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    white-space: pre;
    font-size: 14px;
    line-height: 110%;
  }
`;

export const DividerWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 0;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 30px;
  border-radius: 40px;
  opacity: 0.9;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 1180px) {
    max-width: 1180px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;
    padding: 0;
  }
`;

export const DescBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #c2c2c2;
  background: #ececec;
  padding: 30px 55px;
  margin: 0 40px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const DescWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const DescDot = styled.div`
  min-width: 5px;
  min-height: 5px;
  background-color: #202020;
  opacity: 0.7;
  border-radius: 100px;
  overflow: hidden;
  margin-top: 10px;
`;

export const DescriptionTypo = styled.p`
  color: #202020;
  text-edge: cap;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.7;
  word-break: break-word;

  @media only screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;

export const SlideBox = styled.div`
  width: 100%;
  max-width: 1180px;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 768px;
  }
`;

export const StyledSliderForTech = styled(StyledSlider)`
  .slick-dots {
    bottom: -30px;
  }
`;

export const SlideImageWrap = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 768px;

    > img {
      height: 100%;
      object-fit: contain;
    }
  }
`;
