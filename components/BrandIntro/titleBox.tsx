import styled from "styled-components";
import { BrandSectionSubTitleAccent, BrandSectionSubTitle_1, BrandSectionSubTitle_2, BrandSectionTitleFirmachain, BrandSectionTitleP2E } from "../../constants/brandIntro";
import { IconGameController } from "../Images";
import { TitleTypo } from "../StyledComponent";
import { Box, SubTitleTypo, TitleWrap } from "./styles";

const BrandTitleTypo = styled(TitleTypo)`
    font-size: 40px;
    display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        font-size: 24px;
        gap: 0px;
    }
`;

const TitleBox = () => {
    return (
        <Box>
            <IconGameController />
            <TitleWrap>
                <BrandTitleTypo>
                    {BrandSectionTitleFirmachain}
                    <span>{"X"}</span>
                    {BrandSectionTitleP2E}
                </BrandTitleTypo>
                <SubTitleTypo>
                    {BrandSectionSubTitle_1}
                    <span style={{ color: "#FE691A" }}>{BrandSectionSubTitleAccent}</span>
                    {BrandSectionSubTitle_2}
                </SubTitleTypo>
            </TitleWrap>
        </Box>
    );
};

export default TitleBox;
