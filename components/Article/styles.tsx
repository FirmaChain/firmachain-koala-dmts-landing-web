import styled from 'styled-components';
import { StyledSlider } from '../StyledComponent';

export const BackgroundDim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 8.91%, rgba(255, 255, 255, 0) 39.06%),
    url(<path-to-image>), lightgray -123.412px -47.505px / 113.081% 114.516% no-repeat;
  opacity: 0.2;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 110px 0 0;

  @media only screen and (max-width: 1380px) {
    padding: 80px 0 0;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0 66px;

  @media only screen and (max-width: 1380px) {
    padding: 20px 0 45px;
  }
`;

export const IntroTypo = styled.p`
  color: #101721;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
  white-space: pre;
  line-height: 140%;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px 205px;
  transition: all 0.2s linear;

  @media only screen and (max-width: 980px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CarouselBox = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 50px;

  @media only screen and (max-width: 980px) {
    padding: 0;
    border-radius: 20px;
    background-color: #e8e8e8;
  }
`;

export const BoxBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  // padding: 50px 0 50px;
  transition: all 0.2s linear;

  @media only screen and (max-width: 1380px) {
    // padding: 50px 0 30px;
  }

  @media only screen and (max-width: 980px) {
    padding: 40px 40px 10px 40px;
  }

  @media only screen and (max-width: 700px) {
    padding: 20px 20px 10px 20px;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  transition: all 0.2s linear;
  gap: 64px;

  @media only screen and (max-width: 980px) {
    gap: 30px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const SlideBox = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  // padding: 0 10px;

  @media only screen and (max-width: 980px) {
    padding: 0;
  }
`;

export const StyledSliderForArticle = styled(StyledSlider)`
  .slick-dots {
    bottom: -100px;
  }

  .slick-dots li.slick-active button:before {
    color: #101721;
  }
`;

export const SlideImageWrap = styled.div`
  width: 50%;
  max-width: 518px;
  height: 320px;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  transition: all 0.2s linear;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 1380px) {
    height: 260px;
  }

  @media only screen and (max-width: 1080px) {
    height: 250px;
  }

  @media only screen and (max-width: 980px) {
    max-width: 472.5px;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentTypoBox = styled.div`
  width: 50%;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;

  @media only screen and (max-width: 980px) {
    gap: 25px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 20px;
  }
`;

export const ContentTitleTypo = styled.p`
  color: #101721;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  transition: all 0.2s linear;

  @media only screen and (max-width: 1380px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 980px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ContentDescTypo = styled.p`
  color: #333;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.4;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 150%;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.2s linear;

  @media only screen and (max-width: 1380px) {
    -webkit-line-clamp: 6;
  }

  @media only screen and (max-width: 1080px) {
    -webkit-line-clamp: 5;
  }

  @media only screen and (max-width: 980px) {
    font-size: 16px;
    -webkit-line-clamp: 6;
  }

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 30px;

  @media only screen and (max-width: 1180px) {
    margin-top: 15px;
  }

  @media only screen and (max-width: 980px) {
    padding: 0 20px 20px;
    justify-content: center;
  }
`;

export const ViewArticleButton = styled.div`
  width: 100%;
  text-align: center;
  max-width: 291px;
  max-height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 2;
  cursor: pointer;
  padding: 20px 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #d9d9d9;
  }

  @media only screen and (max-width: 1380px) {
    max-width: 200px;
    padding: 10px 10px;
  }
`;

export const ViewArticleTypo = styled.p`
  color: #515151;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  @media only screen and (max-width: 1380px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const ExternalBox = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 1380px) {
    bottom: -120px;
  }
  @media only screen and (max-width: 980px) {
    bottom: -100px;
  }
`;

export const ExternalWrap = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 20px;

  @media only screen and (max-width: 1380px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const CarouselMobileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  display: none;

  @media only screen and (max-width: 1380px) {
    display: block;
  }
`;
