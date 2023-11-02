import { Fragment, useMemo, useRef, useState } from 'react';
import { CarouselItems, ExternalItems } from '../../constants/article';
import { ArticleCarouselBackgroundImage } from '../../constants/assets';
import {
  ButtonWrap,
  BoxBackground,
  CarouselBox,
  CarouselContainer,
  ContentBox,
  ContentDescTypo,
  ContentTitleTypo,
  ContentTypoBox,
  ContentWrap,
  SlideBox,
  SlideImageWrap,
  ViewArticleButton,
  ViewArticleTypo,
  ExternalBox,
  ExternalWrap,
  StyledSliderForArticle,
} from './styles';
import Slider from 'react-slick';
import {
  IconArticleArrow,
  IconExternalItem,
  ImageArticleSliderNext,
  ImageArticleSliderPrev,
  ImageTabDivider,
} from '../Images';
import { LinkExternal } from '../Button/linkExternal';
import { MEDIUM_URI } from '../../constants/uri';
import { IArticle } from '../../pages';

interface IProps {
  articles: IArticle[];
}

const Carousel = ({ articles }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setSlideIndex(index);
    },
  };

  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <CarouselContainer>
      <CarouselBox>
        <BoxBackground src={ArticleCarouselBackgroundImage} alt={'ARTICLE'} />
        <SlideBox>
          <StyledSliderForArticle ref={sliderRef} {...settings}>
            {articles.map((value) => {
              return (
                <ContentBox key={`${value.title}`} onClick={() => LinkExternal(value.link)}>
                  <ContentWrap>
                    <SlideImageWrap>
                      <img src={value.img} alt={`${value.title}`} />
                    </SlideImageWrap>
                    <ContentTypoBox>
                      <ContentTitleTypo>{value.title}</ContentTitleTypo>
                      <ContentDescTypo>{value.content}</ContentDescTypo>
                    </ContentTypoBox>
                  </ContentWrap>
                </ContentBox>
              );
            })}
          </StyledSliderForArticle>
        </SlideBox>
        <ButtonWrap>
          <ImageArticleSliderPrev enabled={slideIndex > 0} onClick={() => goToPrevious()} />
          <ImageArticleSliderNext enabled={slideIndex < CarouselItems.length - 1} onClick={() => goToNext()} />
          <ViewArticleButton onClick={() => LinkExternal(MEDIUM_URI)}>
            <ViewArticleTypo>{'View All Articles'}</ViewArticleTypo>
            <IconArticleArrow />
          </ViewArticleButton>
        </ButtonWrap>
        <ExternalBox>
          <ExternalWrap>
            {ExternalItems.map((value, index) => {
              const visibleDivider = index >= 0 && index < ExternalItems.length - 1;
              return (
                <Fragment key={value.alt}>
                  <IconExternalItem img={value.img} alt={value.alt} onClick={() => LinkExternal(value.url)} />
                  {visibleDivider && <ImageTabDivider height={'24px'} invisible={false} color='#101721' />}
                </Fragment>
              );
            })}
          </ExternalWrap>
        </ExternalBox>
      </CarouselBox>
    </CarouselContainer>
  );
};

export default Carousel;
