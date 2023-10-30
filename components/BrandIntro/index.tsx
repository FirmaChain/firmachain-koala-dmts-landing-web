import styled from 'styled-components';
import { ContentContainer } from '../StyledComponent';
import ChainGroup from './chainGroup';
import TitleBox from './titleBox';
import { forwardRef } from 'react';

const Container = styled(ContentContainer)`
  min-height: calc(var(--vh, 1vh) * 100);

  @media only screen and (max-width: 768px) {
    min-height: auto;
    height: auto;
  }
`;

const BrandIntro = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container ref={ref}>
      <TitleBox />
      <ChainGroup />
    </Container>
  );
});
BrandIntro.displayName = 'BrandIntro';

export default BrandIntro;
