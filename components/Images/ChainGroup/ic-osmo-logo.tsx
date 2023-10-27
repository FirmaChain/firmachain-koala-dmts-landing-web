import styled from "styled-components";
import { OsmoHoverLogoIcon, OsmoLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: -300px;
    margin-top: 15px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
        margin-left: -50px;
        margin-top: 32px;
    }
`;

const IconOsmoLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={OsmoLogoIcon} hoverImg={OsmoHoverLogoIcon} info={"OSMO"} />
        </Wrap>
    );
};

export default IconOsmoLogo;
