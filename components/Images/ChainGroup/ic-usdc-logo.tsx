import styled from "styled-components";
import { UsdcHoverLogoIcon, UsdcLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: -800px;
    margin-top: 245px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        margin-left: -300px;
        margin-top: -105px;
        display: none;
    }
`;
const IconUsdcLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={UsdcLogoIcon} hoverImg={UsdcHoverLogoIcon} info={"USDC"} />
        </Wrap>
    );
};

export default IconUsdcLogo;
