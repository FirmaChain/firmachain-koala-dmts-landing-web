import styled from 'styled-components';
import { DungeonLightIcon } from '../../constants/assets';
import ImageComponent from './ImageComponent';

const Wrap = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;
const IconDungeonLight = () => {
  return (
    <Wrap>
      <ImageComponent src={DungeonLightIcon} alt={'GO DMTS HUB'} />
    </Wrap>
  );
};

export default IconDungeonLight;
