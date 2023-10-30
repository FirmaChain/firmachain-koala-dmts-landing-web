import styled from 'styled-components';
import { FirmachainIcon } from '../../constants/assets';
import ImageComponent from './ImageComponent';

const Wrap = styled.div`
  width: 136px;
  height: 154px;

  @media only screen and (max-width: 768px) {
    width: 84px;
    height: 94px;
  }
`;

const IconFirmachain = () => {
  return (
    <Wrap>
      <ImageComponent src={FirmachainIcon} alt={'FIRMACHAIN'} />
    </Wrap>
  );
};

export default IconFirmachain;
