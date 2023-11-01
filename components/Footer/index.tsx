import { forwardRef } from 'react';
import { FooterExternalItems } from '../../constants/gnb';
import IconFooterFirmachain from '../Images/ic-footer-firmachain';
import { FooterContainer } from '../StyledComponent';
import Contact from './contact';
import ExternalButton from './externalButton';
import {
  BackgroundImage,
  TopBox,
  Divider,
  ExternalBox,
  FooterBox,
  MobileDivider,
  BottomBox,
  BottomWrap,
  InfoTypo,
  ExternalContainer,
  ContactURI,
} from './styles';

const Footer = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <FooterContainer ref={ref}>
      <BackgroundImage />
      <FooterBox>
        <TopBox>
          <ExternalContainer>
            <ExternalBox>
              {FooterExternalItems[0].map((value) => {
                return <ExternalButton key={value.title} title={value.title} url={value.url} />;
              })}
            </ExternalBox>
            {/* <ExternalBox>
                            {FooterExternalItems[1].map((value) => {
                                return <ExternalButton key={value.title} title={value.title} url={value.url} />;
                            })}
                        </ExternalBox> */}
          </ExternalContainer>
          <MobileDivider />
          <Contact />
        </TopBox>
        <Divider />
        <BottomBox>
          <BottomWrap>
            <IconFooterFirmachain />
          </BottomWrap>
          <BottomWrap>
            <InfoTypo style={{ cursor: 'default' }}>
              {'ⓒ FIRMACHAIN Pte. Ltd.\n'}
              <span>{'|'}</span> {'All Right Reserved. 71 Robinson Road, Singapore,\n068895'}
            </InfoTypo>
          </BottomWrap>
        </BottomBox>
      </FooterBox>
    </FooterContainer>
  );
});
Footer.displayName = 'Footer';

export default Footer;
