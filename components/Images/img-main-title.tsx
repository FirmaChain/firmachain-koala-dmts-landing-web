import styled from 'styled-components';
import { MainTitleImage, MainTitleImage2, MainTitleMobileImage } from '../../constants/assets';
import { MainVisualSub } from '../../constants/mainVisual';

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
  filter: drop-shadow(1px 3px 3px #22222288);

  background-image: url(${MainTitleImage2});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 980px) {
    width: 130px;
    height: 37px;
    background-image: url(${MainTitleImage2});
  }

  @media only screen and (max-width: 768px) {
    width: 86px;
    height: 24px;
  }
`;

const MainBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 12px;
  }
`;

const SubTypo = styled.div`
  text-shadow: 0px 4.701px 35.258px rgba(0, 0, 0, 0.65);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 31.2px */
  background: linear-gradient(118deg, #fff 20.2%, #a5a5a5 83.52%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImgMainTitle = () => {
  return (
    <>
      <MainTitle />
      <MainBottom>
        <SubTypo>{MainVisualSub}</SubTypo>
        <MainTitle2 />
      </MainBottom>
    </>
  );
};

export default ImgMainTitle;
