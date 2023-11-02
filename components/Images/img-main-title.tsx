import styled from 'styled-components';
import { MainTitleImage, MainTitleImage2, MainTitleMobileImage } from '../../constants/assets';

const MainTitle = styled.div`
  width: 798px;
  height: 96px;
  position: relative;
  position: relative;

  background-image: url(${MainTitleImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 980px) {
    width: 350px;
    height: 155px;
    background-image: url(${MainTitleMobileImage});
  }

  @media only screen and (max-width: 768px) {
    width: 270px;
    height: 120px;
  }
`;

const MainTitle2 = styled.div`
  width: 130px;
  height: 37px;
  position: relative;
  position: relative;
  border-radius: 5px;
  margin-bottom: 10px;

  background-image: url(${MainTitleImage2});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 980px) {
    width: 350px;
    height: 155px;
    background-image: url(${MainTitleImage2});
  }

  @media only screen and (max-width: 768px) {
    width: 270px;
    height: 120px;
  }
`;

const ImgMainTitle = () => {
  return (
    <>
      <MainTitle2 />
      <MainTitle />
    </>
  );
};

export default ImgMainTitle;
