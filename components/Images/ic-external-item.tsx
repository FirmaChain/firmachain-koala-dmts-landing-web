import styled from "styled-components";
import ImageComponent from "./ImageComponent";

const Wrap = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover > div:nth-child(1) {
        opacity: 0.1;
    }

    @media only screen and (max-width: 1180px) {
        width: 65px;
        height: 65px;
    }

    @media only screen and (max-width: 850px) {
        width: 50px;
        height: 50px;
    }
`;

const Background = styled.div`
    position: absolute;
    background-color: #000;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
`;

const ImageWrap = styled.div`
    width: 48px;
    height: 48px;
    position: relative;

    @media only screen and (max-width: 1180px) {
        width: 36px;
        height: 36px;
    }

    @media only screen and (max-width: 850px) {
        width: 28px;
        height: 28px;
    }
`;

interface IProps {
    img: string;
    alt: string;
    onClick: () => void;
}

const IconExternalItem = ({ img, alt, onClick }: IProps) => {
    return (
        <Wrap onClick={onClick}>
            <Background />
            <ImageWrap>
                <ImageComponent src={img} alt={alt} />
            </ImageWrap>
        </Wrap>
    );
};

export default IconExternalItem;
