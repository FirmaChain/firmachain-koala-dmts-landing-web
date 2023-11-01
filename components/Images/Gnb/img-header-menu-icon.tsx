import styled from 'styled-components';
import ImageComponent from '../ImageComponent';
import { MenuBkIcon, MenuCloseIcon, MenuWhIcon } from '../../../constants/assets';

const LogoWrap = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

const Wrap = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;

  opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

const ImageWrap = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

interface IProps {
  color: 'NONE' | 'WHITE' | 'BLACK';
  isOpen: boolean;
}

const HeaderMenuIcon = ({ color, isOpen }: IProps) => {
  return (
    <LogoWrap>
      <Wrap $visible={isOpen === false && (color === 'WHITE' || color === 'NONE')}>
        <ImageWrap>
          <ImageComponent src={MenuWhIcon} alt={'MENU'} />
        </ImageWrap>
      </Wrap>
      <Wrap $visible={isOpen === false && color === 'BLACK'}>
        <ImageWrap>
          <ImageComponent src={MenuBkIcon} alt={'MENU'} />
        </ImageWrap>
      </Wrap>
      <Wrap $visible={isOpen === true}>
        <ImageWrap>
          <ImageComponent src={MenuCloseIcon} alt={'MENU'} />
        </ImageWrap>
      </Wrap>
    </LogoWrap>
  );
};

export default HeaderMenuIcon;
