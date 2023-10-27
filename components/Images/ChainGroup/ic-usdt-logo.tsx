import styled from "styled-components";
import { UsdtHoverLogoIcon, UsdtLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 96px;
    height: 96px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: -650px;
    margin-top: -82px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
        margin-left: -195px;
        margin-top: 25px;
    }
`;

const IconUsdtLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={UsdtLogoIcon} hoverImg={UsdtHoverLogoIcon} info={"USDT"} />
        </Wrap>
    );
};

export default IconUsdtLogo;
