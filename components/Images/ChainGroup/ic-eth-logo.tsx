import styled from "styled-components";
import { EthHoverLogoIcon, EthLogoIcon } from "../../../constants/assets";
import FlipLogo from "../../BrandIntro/flipLogo";

const Wrap = styled.div`
    width: 96px;
    height: 96px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-left: 530px;
    margin-top: -30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);

    @media only screen and (max-width: 768px) {
        margin-left: 330px;
        margin-top: -80px;
        display: none;
    }
`;

const IconEthLogo = () => {
    return (
        <Wrap>
            <FlipLogo frontImg={EthLogoIcon} hoverImg={EthHoverLogoIcon} info={"ETHERIUM"} />
        </Wrap>
    );
};

export default IconEthLogo;
