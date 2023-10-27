import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import { LinkExternal } from "../../Button/linkExternal";

const Wrap = styled.div`
    width: 32px;
    height: 32px;
    position: relative;
    cursor: pointer;
    image-rendering: pixelated;
    opacity: 0.65;
    transition: all 0.2s ease-in-out;

    &: hover {
        opacity: 1;
    }
`;

interface IProps {
    alt: string;
    img: string;
    url: string;
}

const IconSocialItem = ({ alt, img, url }: IProps) => {
    return (
        <Wrap onClick={() => LinkExternal(url)}>
            <ImageComponent src={img} alt={alt} />
        </Wrap>
    );
};

export default IconSocialItem;
