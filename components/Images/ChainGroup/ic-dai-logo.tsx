import styled from "styled-components";
import { DaiHoverLogoIcon, DaiLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: -450px;
    margin-top: 65px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 56px;
        height: 56px;
        margin-left: -120px;
        margin-top: -25px;
    }
`;

const IconDaiLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={DaiLogoIcon} hoverImg={DaiHoverLogoIcon} info={"DAI"} />
        </Wrap>
    );
};

export default IconDaiLogo;
