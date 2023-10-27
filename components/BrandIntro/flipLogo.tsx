import { useState } from "react";
import styled from "styled-components";
import ImageComponent from "../Images/ImageComponent";

const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    perspective: 1000px;
`;

const LogoWrap = styled.div<{ $isFront: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    image-rendering: auto;
`;

const Face = styled.div<{ $isFlipped: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.5s;
    transform-style: preserve-3d;
`;

const FrontLogo = styled(Face)`
    transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const HoverInfo = styled(Face)`
    transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(0deg)" : "rotateY(180deg)")};
    color: #363636;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
`;

interface IProps {
    info: string;
    frontImg: string;
    hoverImg: string;
    pixelated?: boolean;
}

const FlipLogo = ({ info, frontImg, hoverImg }: IProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Card onMouseOver={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <FrontLogo $isFlipped={isFlipped}>
                <LogoWrap $isFront={true}>
                    <ImageComponent src={frontImg} alt={info} />
                </LogoWrap>
            </FrontLogo>

            <HoverInfo $isFlipped={isFlipped}>
                <LogoWrap $isFront={false}>
                    <ImageComponent src={hoverImg} alt={info} />
                </LogoWrap>
            </HoverInfo>
        </Card>
    );
};

export default FlipLogo;
