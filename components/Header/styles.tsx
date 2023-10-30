import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px 60px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const LogoWrap = styled.div`
  cursor: pointer;
  pointer-events: auto;
`;

export const DungeonButtonWrap = styled.div<{ $isMenu: boolean }>`
  height: 52px;
  padding: 0 15px 0 20px;
  border-radius: 31.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(101deg, #ff8c5f 1.08%, #ff4800 51.59%, #ff9a72 97.17%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  pointer-events: auto;

  &:hover {
    border: 1px solid #ff4800;
    > div:nth-child(1) {
      opacity: 1;
    }

    > p:nth-child(2) {
      color: #ff4d07;
    }
  }

  @media only screen and (max-width: 1180px) {
    width: ${(props) => (props.$isMenu ? '100%' : '200px')};
  }
`;

export const HoverBackround = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

export const ButtonTypo = styled.p<{ $isMenu: boolean }>`
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-right: 8px;
  z-index: 2;
  color: #fff;

  @media only screen and (max-width: 1180px) {
    font-size: ${(props) => (props.$isMenu ? '16px' : '14px')};
  }
`;

export const ArrowIconBox = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  margin-left: 12px;
  z-index: 2;

  @media only screen and (max-width: 1180px) {
    display: none;
  }
`;

export const ArrowIconWrap = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
