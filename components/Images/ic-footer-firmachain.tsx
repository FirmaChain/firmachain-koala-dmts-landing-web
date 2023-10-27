import styled from "styled-components";
import { FooterFirmachainLogo } from "../../constants/assets";
import ImageComponent from "./ImageComponent";
import { LinkExternal } from "../Button/linkExternal";
import { FIRMACHAIN_URI } from "../../constants/uri";

const Wrap = styled.div`
    width: 184px;
    height: 48px;
    position: relative;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        width: 155px;
        height: 40px;
    }
`;

const IconFooterFirmachain = () => {
    return (
        <Wrap onClick={() => LinkExternal(FIRMACHAIN_URI)}>
            <ImageComponent src={FooterFirmachainLogo} alt={"FIRMACHAIN"} />
        </Wrap>
    );
};

export default IconFooterFirmachain;
