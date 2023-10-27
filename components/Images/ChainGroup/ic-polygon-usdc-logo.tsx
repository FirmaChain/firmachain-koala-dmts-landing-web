import styled from "styled-components";
import { PolygonUsdcHoverLogoIcon, PolygonUsdcLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 56px;
    height: 56px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: 800px;
    margin-top: -180px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        width: 24px;
        height: 24px;
        margin-left: 195px;
        margin-top: -60px;
    }
`;

const IconPolygonUsdcLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={PolygonUsdcLogoIcon} hoverImg={PolygonUsdcHoverLogoIcon} info={"POLYGON USDC"} />
        </Wrap>
    );
};

export default IconPolygonUsdcLogo;
