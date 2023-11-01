import styled from 'styled-components';
import ImageComponent from '../ImageComponent';
import { FirmachainMobileBkLogoImage, FirmachainMobileWhLogoImage } from '../../../constants/assets';

const LogoWrap = styled.div`
  width: 155px;
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
  width: 155px;
  height: 40px;
`;

interface IProps {
  color: 'NONE' | 'WHITE' | 'BLACK';
}

const FirmachainHeaderMobileLogoImage = ({ color = 'WHITE' }: IProps) => {
  return (
    <LogoWrap>
      <Wrap $visible={color === 'WHITE' || color === 'NONE'}>
        <ImageWrap>
          <ImageComponent src={FirmachainMobileWhLogoImage} alt={'FIRMACHAIN'} />
        </ImageWrap>
      </Wrap>
      <Wrap $visible={color === 'BLACK'}>
        <ImageWrap>
          <ImageComponent src={FirmachainMobileBkLogoImage} alt={'FIRMACHAIN'} />
        </ImageWrap>
      </Wrap>
    </LogoWrap>
  );
};

export default FirmachainHeaderMobileLogoImage;
