import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
`;

export const MainBox = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
`;

export const FooterContainer = styled.div`
  border-top: 1px solid #eaeaea;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 0 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const TitleTypo = styled.h3`
  color: #161719;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Partial Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;

  @media only screen and (max-width: 1180px) {
    font-size: 22px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    bottom: -20px;
  }

  .slick-dots li {
    border-radius: 50%;
    margin: 0;
    width: 20px;
    height: 20px;
  }

  .slick-dots li button:before {
    font-size: 8px;
    color: #60656b;
  }

  .slick-dots li.slick-active button:before {
    font-size: 8px;
    color: #f46e27;
  }
`;

export const lineSlide = keyframes`
    0%{
        opacity: 0;
        transform: scale(0);
        offset-distance: 0%
    },
    20%{
        opacity: 1;
        transform: scale(1);
    },
    30%{
        transform: scale(0.8);
    },
    40%{
        transform: scale(0.5);
    },
    50%{
        transform: scale(0.2);
    },
    60%{
        transform: scale(0.5);
    },
    70%{
        transform: scale(0.8);
    },
    80%{
        opacity: 1;
        transform: scale(1);
    },
    100%{
        opacity: 0;
        transform: scale(0);
        offset-distance: 100%;
    }
`;
