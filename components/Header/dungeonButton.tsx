import { useState } from 'react';
import { IconDungeonLight } from '../Images';
import { ArrowIconBox, ButtonTypo, HoverBackround, DungeonButtonWrap, ArrowIconWrap, ImageWrap } from './styles';
import { DungeonArrowIcon, DungeonArrowIconHover } from '../../constants/assets';
import ImageComponent from '../Images/ImageComponent';
import { LinkExternal } from '../Button/linkExternal';
import { KOALA_HUB_URI } from '../../constants/uri';

interface IProps {
  isMenu?: boolean;
}

const DungeonButton = ({ isMenu = false }: IProps) => {
  const [hover, setHover] = useState(false);

  return (
    <DungeonButtonWrap
      $isMenu={isMenu}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => LinkExternal(KOALA_HUB_URI)}
    >
      <HoverBackround />
      <ButtonTypo $isMenu={isMenu}>{'GO DMTS HUB'}</ButtonTypo>
      <IconDungeonLight />
      <ArrowIconBox>
        <ArrowIconWrap $visible={hover === false}>
          <ImageWrap>
            <ImageComponent src={DungeonArrowIcon} alt={'GO DMTS HUB'} />
          </ImageWrap>
        </ArrowIconWrap>
        <ArrowIconWrap $visible={hover === true}>
          <ImageWrap>
            <ImageComponent src={DungeonArrowIconHover} alt={'GO DMTS HUB'} />
          </ImageWrap>
        </ArrowIconWrap>
      </ArrowIconBox>
    </DungeonButtonWrap>
  );
};

export default DungeonButton;
