import styled from "styled-components";
import { BtcHoverLogoIcon, BtcLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: 75px;
    margin-top: 115px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        margin-left: 55px;
        margin-top: 85px;
        display: none;
    }
`;

const IconBtcLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={BtcLogoIcon} hoverImg={BtcHoverLogoIcon} info={"BITCOIN"} />
        </Wrap>
    );
};

export default IconBtcLogo;
