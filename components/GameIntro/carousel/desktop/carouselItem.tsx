import { DirectionType } from ".";
import { DescTypo, DescWrap, DimBox, Image, ItemContainer, TitleTypo, TitleWrap, TwistedImage } from "../../styles";

interface IProps {
    title: string;
    img: string;
    desc: string;
    isCurrent: boolean;
    direction: DirectionType;
}

const CarouselItem = ({ title, img, desc, isCurrent, direction }: IProps) => {
    return (
        <ItemContainer $isCurrent={isCurrent} $direction={direction}>
            <TitleWrap>
                <TitleTypo>{title}</TitleTypo>
                <DimBox $isCurrent={isCurrent} />
            </TitleWrap>
            <TwistedImage $isCurrent={isCurrent}>
                <Image style={{ backgroundImage: `url(${img})` }} />
                <DimBox $isCurrent={isCurrent} />
            </TwistedImage>
            <DescWrap $isCurrent={isCurrent}>
                <DescTypo>{desc}</DescTypo>
            </DescWrap>
        </ItemContainer>
    );
};

export default CarouselItem;
