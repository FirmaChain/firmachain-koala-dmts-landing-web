import styled from "styled-components";
import { KoalaHoverLogoIcon, KoalaLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 65px;
    height: 65px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;

    position: absolute;
    margin-left: 170px;
    margin-top: 65px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 56px;
        height: 56px;
        margin-left: 100px;
        margin-top: -25px;
    }
`;

const IconKoalaLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={KoalaLogoIcon} hoverImg={KoalaHoverLogoIcon} info={"KOALA KNIGHT"} />
        </Wrap>
    );
};

export default IconKoalaLogo;
