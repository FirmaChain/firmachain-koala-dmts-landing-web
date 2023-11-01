import styled from 'styled-components';
import { FirmachainIcon2 } from '../../constants/assets';
import ImageComponent from './ImageComponent';

const Wrap = styled.div`
  width: 136px;
  height: 154px;

  min-width: 80px;
  min-height: 90px;
  & > img {
    filter: drop-shadow(3px 3px 5px #00000066);
  }
  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 90px;
  }
`;

const IconFirmachain = () => {
  return (
    <Wrap>
      <ImageComponent src={FirmachainIcon2} alt={'FIRMACHAIN'} />
    </Wrap>
  );
};

export default IconFirmachain;
