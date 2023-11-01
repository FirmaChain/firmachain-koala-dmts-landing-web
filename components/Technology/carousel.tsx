import { Fragment, useCallback, useRef, useState } from 'react';
import { CarouselItems } from '../../constants/technology';
import {
  CarouselContainer,
  ContentBox,
  DescBox,
  DescDot,
  DescriptionTypo,
  DescWrap,
  SlideBox,
  SlideImageWrap,
  StyledSliderForTech,
  TabBox,
  TabTypo,
  TabTypoWrap,
  TabWrap,
} from './styles';
import { ImageSliderNext, ImageSliderPrev, ImageTabDivider } from '../Images';
import { CSSProperties } from 'styled-components';
import { useBrowerSizeDetect } from '../../hooks/useResize';
import Slider from 'react-slick';

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [selectTab, setSelectTab] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const { isMobile } = useBrowerSizeDetect();

  const onClickSelectTab = (value: number) => {
    if (isBlocked) return;
    setIsBlocked(true);

    setSelectTab(value);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(value);
    }

    setTimeout(() => {
      setIsBlocked(false);
    }, 500);
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

  const settings = {
    infinite: false,
    speed: 500,
    dots: isMobile ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSelectTab(newIndex);
    },
    prevArrow: <ImageSliderPrev enabled={selectTab > 0} onClick={goToPrevious} />,
    nextArrow: <ImageSliderNext enabled={selectTab < CarouselItems.length - 1} onClick={goToNext} />,
  };

  const onChangeButtonPosition = (index: number) => {
    return { left: `${index * 33.3}%` };
  };

  return (
    <CarouselContainer>
      <TabBox>
        <TabWrap style={onChangeButtonPosition(selectTab)} />
        <TabTypoWrap>
          {CarouselItems.map((value, index) => {
            const selected = selectTab === index;
            const visibleDivider = index >= 0 && index < CarouselItems.length - 1;
            const invisibleDivider =
              (selectTab === 0 && index === 0) || selectTab === 1 || (selectTab === 2 && index === 1);
            return (
              <Fragment key={`tab-${index}`}>
                <TabTypo $selected={selected} onClick={() => onClickSelectTab(index)}>
                  {value.title}
                </TabTypo>
                {visibleDivider && <ImageTabDivider height={'28px'} invisible={invisibleDivider} />}
              </Fragment>
            );
          })}
        </TabTypoWrap>
      </TabBox>
      <ContentBox>
        <SlideBox>
          <StyledSliderForTech ref={sliderRef} {...settings}>
            {CarouselItems.map((value, index) => {
              return (
                <SlideImageWrap key={`${value.title}-${index}`}>
                  <img src={isMobile ? value.imgMobile : value.img} alt={value.title} style={{ width: '100%' }} />
                </SlideImageWrap>
              );
            })}
          </StyledSliderForTech>
        </SlideBox>
        <DescBox>
          {CarouselItems[selectTab].desc.map((value, index) => {
            return (
              <DescWrap key={`desc-${CarouselItems[selectTab].title}-${index}`}>
                <DescDot />
                <DescriptionTypo>{value}</DescriptionTypo>
              </DescWrap>
            );
          })}
        </DescBox>
      </ContentBox>
    </CarouselContainer>
  );
};

export default Carousel;
