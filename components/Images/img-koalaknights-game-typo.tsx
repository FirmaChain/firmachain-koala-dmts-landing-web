import styled from "styled-components";
import { GameKoalaKnightTypoImage, GameKoalaKnightTypoMobileImage } from "../../constants/assets";
import ImageComponent from "./ImageComponent";

const TitleTypoImage = styled.div`
    width: 583px;
    height: 62px;
    position: relative;

    background-image: url(${GameKoalaKnightTypoImage});
    backgorund-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: 768px) {
        width: 192px;
        height: 78px;
        background-image: url(${GameKoalaKnightTypoMobileImage});
    }
`;

const ImageKoalaknightsGameTypo = () => {
    return <TitleTypoImage />;
};

export default ImageKoalaknightsGameTypo;
