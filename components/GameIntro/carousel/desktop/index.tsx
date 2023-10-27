import { CSSProperties } from "styled-components";
import { CarouselItems } from "../../../../constants/gameIntro";
import { IconPixelArrowLeft, IconPixelArrowRight } from "../../../Images";
import CarouselItem from "./carouselItem";
import { ArrowButton, CarouselBox, ItemBox } from "../../styles";
import { useCallback, useState } from "react";

export type DirectionType = "PREV" | "NEXT";

const Desktop = () => {
    const CarouselLength = CarouselItems.length;
    const [currentSlide, setCurrentSlide] = useState(Math.floor(CarouselLength / 2));
    const [direction, setDirection] = useState<DirectionType>("NEXT");
    const [currentSlidePosition, setCurrentSlidePosition] = useState<CSSProperties>({ left: 0, right: 0, top: 0 });
    const [isBlocked, setIsBlocked] = useState(false);

    const handlePrevSlide = () => {
        if (isBlocked) return;
        const direction = "PREV";
        let newCurrent = currentSlide - 1;
        if (newCurrent < 0) newCurrent = 0;
        setCurrentSlide(newCurrent);
        setDirection(direction);
        onChangeCurrentPosition(direction);
    };

    const handleNextSlide = () => {
        if (isBlocked) return;
        const direction = "NEXT";
        let newCurrent = currentSlide + 1;
        if (newCurrent > CarouselItems.length - 1) newCurrent = CarouselItems.length - 1;
        setCurrentSlide(newCurrent);
        setDirection(direction);
        onChangeCurrentPosition(direction);
    };

    const onChangeCurrentPosition = (direction: DirectionType) => {
        setIsBlocked(true);
        if (direction === "NEXT") setCurrentSlidePosition({ left: "auto", right: 0, top: 0 });
        if (direction === "PREV") setCurrentSlidePosition({ left: 0, right: "auto", top: 0 });

        setTimeout(() => {
            setIsBlocked(false);
            setCurrentSlidePosition({ left: 0, right: 0, top: 0 });
        }, 500);
    };

    const onChangeButtonPosition = (index: number) => {
        if (index !== currentSlide) {
            if (index < currentSlide) {
                return { right: "auto", left: `calc(-${(currentSlide - index) * 52}% - 30px)`, top: "-25px" };
            } else {
                return { left: "auto", right: `calc(-${(index - currentSlide) * 52}% - 30px)`, top: "-25px" };
            }
        }
    };

    return (
        <CarouselBox>
            {CarouselItems.map((item, index) => {
                const current = index === currentSlide;
                return (
                    <ItemBox key={index} style={current ? currentSlidePosition : onChangeButtonPosition(index)}>
                        <CarouselItem isCurrent={current} title={item.title} direction={direction} img={item.img} desc={item.desc} />
                    </ItemBox>
                );
            })}
            <ArrowButton $position={"LEFT"} $isEndPoint={currentSlide === 0} onClick={() => (currentSlide === 0 ? null : handlePrevSlide())}>
                <IconPixelArrowLeft />
            </ArrowButton>
            <ArrowButton $position={"RIGHT"} $isEndPoint={currentSlide === CarouselItems.length - 1} onClick={() => (currentSlide === CarouselItems.length - 1 ? null : handleNextSlide())}>
                <IconPixelArrowRight />
            </ArrowButton>
        </CarouselBox>
    );
};

export default Desktop;
