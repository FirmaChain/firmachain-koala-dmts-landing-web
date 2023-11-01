import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TypoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 56px 0 40px;

  @media only screen and (max-width: 768px) {
    padding: 35px 0 60px;
    gap: 0px;
  }
`;

export const DungeonButtonWrap = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const BoldTypo = styled.p`
  color: #fff;
  text-shadow: 0px 4.701030731201172px 35.257728576660156px rgba(0, 0, 0, 0.65);
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    opacity: 0.8;
  }
`;

export const BoldNormal = styled.p`
  color: #fff;
  text-shadow: 0px 4.701030731201172px 35.257728576660156px rgba(0, 0, 0, 0.65);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.6;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  transition: all 0.2s ease-in-out;
`;

export const BottomShape = styled.div`
  clip-path: polygon(0% 100%, 100% 100%, 100% 30%, 50% 100%, 0 30%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 290px;
  background-color: #fff;

  @media only screen and (max-width: 1180px) {
    display: none;
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`;

export const VideoDim = styled.div<{ $position: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  ${(props) =>
    props.$position === 'top' &&
    `
        width: 100%;
        height: 60%;
        top: 0;
        left: 0;
    
    `}
  ${(props) =>
    props.$position === 'bottom' &&
    `
        width: 100%;
        height: 60%;
        bottom: 0;
        left: 0;
    `}

    ${(props) =>
    props.$position === 'left' &&
    `
        width: 60%;
        height: 100%;
        top: 0;
        left: 0;
    `}

    ${(props) =>
    props.$position === 'right' &&
    `
        width: 60%;
        height: 100%;
        top: 0;
        right: 0;
    `}

    background: linear-gradient(to ${(props) => props.$position}, rgba(32, 32, 32, 0) 1.33%, #101721 100%);
`;

export const ExternalBox = styled.div`
  position: absolute;
  top: 24px;
  z-index: 20;
  overflow: hidden;

  width: 508px;
  height: 52px;
  border-radius: 52.5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media only screen and (max-width: 1180px) {
    width: 380px;
    gap: 35px;
  }

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const ExternalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: #fff;
  z-index: 1;
`;

export const ExternalButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.2s linear;

  z-index: 2;
  padding: 10px 0;

  &:hover {
    opacity: 1;
  }
`;

export const ExternalTypo = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  @media only screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;
