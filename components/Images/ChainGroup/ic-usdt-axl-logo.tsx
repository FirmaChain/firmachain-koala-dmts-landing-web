import styled from "styled-components";
import { UsdtAxlHoverLogoIcon, UsdtAxlLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 96px;
    height: 96px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: 350px;
    margin-top: 60px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 48px;
        height: 48px;
        margin-left: 130px;
        margin-top: 42px;
    }
`;

const IconUsdtAxlLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={UsdtAxlLogoIcon} hoverImg={UsdtAxlHoverLogoIcon} info={"USDT AXL"} />
        </Wrap>
    );
};

export default IconUsdtAxlLogo;
