import { ContentContainer } from '../StyledComponent';
import { BoldNormal, BoldTypo, Box, DungeonButtonWrap, TypoBox } from './styles';
import { MainVisualTitleBold, MainVisualTitleNormal } from '../../constants/mainVisual';
import { IconArrowBottom, IconKoalaknights, ImgMainTitle } from '../Images';
import VideoBackground from './videoBackground';
import External from './external';
import DungeonButton from '../Header/dungeonButton';
import { forwardRef } from 'react';

const MainVisual = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <ContentContainer style={{ height: 'calc(var(--vh, 1vh) * 100)' }} ref={ref}>
      <VideoBackground />
      <Box>
        <External />
        <ImgMainTitle />
        <TypoBox>
          <h1 style={{ display: 'none' }}>{`${MainVisualTitleBold} ${MainVisualTitleNormal}`}</h1>
          <BoldTypo>{MainVisualTitleBold}</BoldTypo>
          <BoldNormal>{MainVisualTitleNormal}</BoldNormal>
        </TypoBox>
        <DungeonButtonWrap>
          <DungeonButton />
        </DungeonButtonWrap>
        <IconKoalaknights />
        <IconArrowBottom />
      </Box>
    </ContentContainer>
  );
});
MainVisual.displayName = 'MainVisual';

export default MainVisual;
