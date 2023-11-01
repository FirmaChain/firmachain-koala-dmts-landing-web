import { useCallback, useRef, useState } from 'react';
import { StyledSlider } from '../../../StyledComponent';
import {
  MobileArrowButton,
  MobileCarouselBox,
  MobileSlideBox,
  MobileSlideImageWrap,
  MobileSliderWrap,
  MobileTitleTypo,
  MobileTitleWrap,
} from '../../styles';
import { CarouselItemsMobile } from '../../../../constants/gameIntro';
import { IconPixelArrowLeft, IconPixelArrowRight } from '../../../Images';
import Slider from 'react-slick';
import IconPixelArrowLeftMobile from '../../../Images/Arrows/ic-pixel-arrow-left-mobile';
import IconPixelArrowRightMobile from '../../../Images/Arrows/ic-pixel-arrow-right-mobile';

const Mobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

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

  const PrevButton = useCallback(() => {
    return (
      <MobileArrowButton
        $position={'LEFT'}
        // $isEndPoint={currentSlide === 0}
        $isEndPoint={false}
        onClick={() => goToPrevious()}
      >
        <IconPixelArrowLeftMobile />
      </MobileArrowButton>
    );
  }, []);

  const NextButton = useCallback(() => {
    return (
      <MobileArrowButton
        $position={'RIGHT'}
        // $isEndPoint={currentSlide === CarouselItemsMobile.length - 1}
        $isEndPoint={false}
        onClick={() => goToNext()}
      >
        <IconPixelArrowRightMobile />
      </MobileArrowButton>
    );
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide);
    },
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <MobileCarouselBox>
      <StyledSlider ref={sliderRef} {...settings}>
        {CarouselItemsMobile.map((value, index) => {
          return (
            <MobileSlideBox key={`${value.title}-${index}`}>
              <MobileSliderWrap>
                <MobileTitleWrap>
                  <MobileTitleTypo>{value.title}</MobileTitleTypo>
                </MobileTitleWrap>
                <MobileSlideImageWrap key={`${value.title}-${index}`}>
                  <div
                    style={{
                      backgroundImage: `url('${value.img}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      minHeight: '220px',
                      // transform: 'scale(1.2)',
                      objectFit: 'cover',
                    }}
                  />
                </MobileSlideImageWrap>
              </MobileSliderWrap>
            </MobileSlideBox>
          );
        })}
      </StyledSlider>
    </MobileCarouselBox>
  );
};

export default Mobile;
