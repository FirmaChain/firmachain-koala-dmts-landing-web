import { Fragment, useState } from 'react';
import { FirmachainHeaderMobileLogoImage } from '../../Images';
import { MenuExternalItems } from '../../../constants/gnb';
import { LogoWrap } from '../styles';
import styled from 'styled-components';
import DungeonButton from '../dungeonButton';
import HeaderMenuIcon from '../../Images/Gnb/img-header-menu-icon';
import MenuExternalButton from '../../Button/menuExternalButton';
import { LinkExternal } from '../../Button/linkExternal';
import { FIRMACHAIN_URI } from '../../../constants/uri';

const MobileHeaderContainer = styled.div<{ $isOpen: boolean; $color: 'WHITE' | 'BLACK' }>`
  width: 100%;
  height: 58px;
  position: fixed;
  top: 0;
  padding: 0 19px 0 13px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(2px);
  webkit-backdrop-filter: blur(2px);
  z-index: 9999;

  ${(props) => props.$color === 'WHITE' && 'background-color: #14141450'};
  ${(props) => props.$color === 'BLACK' && 'background-color: #FFFFFF20'};
  ${(props) => props.$isOpen && 'background-color: #101721'};

  @media only screen and (max-width: 980px) {
    display: flex;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 58px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const MenuBox = styled.div<{ $isOpen: boolean }>`
  height: ${(props) => (props.$isOpen ? 'calc(var(--vh, 1vh) * 100 - 58px)' : 0)};
  padding: ${(props) => (props.$isOpen ? '50px 20px' : '0 40px')};
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 58px;
  left: 0;
  background-color: #101721;
  transition: all 0.2s ease-in-out;
`;

const ExportBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 28px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.2;
`;

interface IProps {
  headerColor: 'WHITE' | 'BLACK';
}

const Mobile = ({ headerColor }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickExternal = (uri: string) => {
    LinkExternal(uri);
  };

  return (
    <MobileHeaderContainer $isOpen={isOpen} $color={headerColor}>
      <HeaderBox>
        <LogoWrap onClick={() => onClickExternal(FIRMACHAIN_URI)}>
          <FirmachainHeaderMobileLogoImage color={isOpen ? 'WHITE' : headerColor} />
        </LogoWrap>
        <LogoWrap onClick={onClickMenu}>
          <HeaderMenuIcon color={headerColor} isOpen={isOpen} />
        </LogoWrap>
        <MenuBox $isOpen={isOpen}>
          <ExportBox>
            {MenuExternalItems.map((value) => {
              return (
                <Fragment key={value.title}>
                  <MenuExternalButton title={value.title} onClick={() => onClickExternal(value.url)} />
                  <Divider />
                </Fragment>
              );
            })}
          </ExportBox>
          <DungeonButton isMenu={true} />
        </MenuBox>
      </HeaderBox>
    </MobileHeaderContainer>
  );
};

export default Mobile;
