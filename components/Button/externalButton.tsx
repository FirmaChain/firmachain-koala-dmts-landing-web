import styled from 'styled-components';
import { IconExternalArrow } from '../Images';
import { useState } from 'react';
import IconExternalArrowHover from '../Images/Arrows/ic-arrow-external-hover';

export const ExternalButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s linear;
  opacity: 1;

  z-index: 2;
  padding: 10px 0;

  &:hover > p {
    color: #fe691a;
  }
`;

export const ExternalTypo = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  transition: all 0.2s linear;

  @media only screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;

const ArrowWrap = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
`;

const ImageWrap = styled.div<{ $visible: boolean }>`
  position: absolute;
  transition: all 0.2s linear;

  opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

interface IProps {
  title: string;
  onClick: () => void;
}

const ExternalButton = ({ title, onClick }: IProps) => {
  const [hover, setHover] = useState(false);

  return (
    <ExternalButtonWrap onClick={onClick} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <ExternalTypo>{title}</ExternalTypo>
      <ArrowWrap>
        <ImageWrap $visible={hover === false}>
          <IconExternalArrow />
        </ImageWrap>

        <ImageWrap $visible={hover === true}>
          <IconExternalArrowHover />
        </ImageWrap>
      </ArrowWrap>
    </ExternalButtonWrap>
  );
};

export default ExternalButton;
