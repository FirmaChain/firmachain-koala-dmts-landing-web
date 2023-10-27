import styled from "styled-components";
import { AtomHoverLogoIcon, AtomLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 32px;
    height: 32px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: -70px;
    margin-top: 142px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        margin-left: -55px;
        margin-top: 110px;
        display: none;
    }
`;

const IconAtomLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={AtomLogoIcon} hoverImg={AtomHoverLogoIcon} info={"ATOM"} />
        </Wrap>
    );
};

export default IconAtomLogo;
