import styled from 'styled-components';
import ImageComponent from '../ImageComponent';
import { FirmachainBkLogoImage, FirmachainWhLogoImage } from '../../../constants/assets';

const LogoWrap = styled.div`
  width: 154px;
  height: 40px;
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
  width: 154px;
  height: 40px;
`;

interface IProps {
  color: 'NONE' | 'WHITE' | 'BLACK';
}

const FirmachainHeaderLogoImage = ({ color = 'WHITE' }: IProps) => {
  return (
    <LogoWrap>
      <Wrap $visible={color === 'WHITE' || color === 'NONE'}>
        <ImageWrap>
          <ImageComponent src={FirmachainWhLogoImage} alt={'FIRMACHAIN'} />
        </ImageWrap>
      </Wrap>
      <Wrap $visible={color === 'BLACK'}>
        <ImageWrap>
          <ImageComponent src={FirmachainBkLogoImage} alt={'FIRMACHAIN'} />
        </ImageWrap>
      </Wrap>
    </LogoWrap>
  );
};

export default FirmachainHeaderLogoImage;
