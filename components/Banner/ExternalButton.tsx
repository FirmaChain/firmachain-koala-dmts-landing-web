import { useState } from 'react';
import styled from 'styled-components';
import ImageComponent from '../Images/ImageComponent';
import { LinkExternal } from '../Button/linkExternal';

interface IProps {
  color: string[];
  icon: string[];
  url: string;
  alt: string;
  arrowIcon: string[];
}

const ExternalButton = ({ color, icon, alt, url, arrowIcon }: IProps) => {
  const [hover, setHover] = useState(false);

  return (
    <ButtonContainer
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      $backgroundColor={color}
      onClick={() => LinkExternal(url)}
    >
      <IconWrap>
        <Icon>
          <ImageComponent src={icon[0]} alt={alt} />
        </Icon>
        {icon[1] !== undefined && (
          <Icon style={{ opacity: hover ? 1 : 0 }}>
            <ImageComponent src={icon[1]} alt={alt} />
          </Icon>
        )}
      </IconWrap>
      <ArrowWrap>
        <ArrowIcon>
          <ImageComponent src={arrowIcon[0]} alt={`${alt}-ARROW`} />
        </ArrowIcon>
        <ArrowIcon style={{ opacity: hover ? 1 : 0 }}>
          <ImageComponent src={arrowIcon[1]} alt={`${alt}-ARROW`} />
        </ArrowIcon>
      </ArrowWrap>
    </ButtonContainer>
  );
};

export default ExternalButton;

const ButtonContainer = styled.div<{ $backgroundColor: string[] }>`
  width: 64px;
  max-height: 164px;
  padding: 10px 0;
  gap: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  border-radius: 31.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  background-color: ${(props) => props.$backgroundColor[0]};

  &:hover {
    background-color: ${(props) => props.$backgroundColor[1]};
  }

  transform: rotate(45deg);

  @media only screen and (max-width: 768px) {
    gap: 20px;
    width: 47px;
    max-height: 121px;
  }
`;

const IconWrap = styled.div`
  width: 36px;
  height: 36px;

  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const Icon = styled.div`
  transform: rotate(-45deg) translate3d(0, 0, 0);
  width: 36px;
  height: 36px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  image-rendering: pixelated;

  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const ArrowWrap = styled.div`
  width: 52px;
  height: 52px;

  @media only screen and (max-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

const ArrowIcon = styled.div`
  transform: rotate(-45deg) translate3d(0, 0, 0);
  width: 52px;
  height: 52px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  image-rendering: pixelated;

  @media only screen and (max-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;
