import styled from "styled-components";
import { BannerSectionDesc, BannerSectionTitle, ButtonItems } from "../../constants/banner";
import { TitleTypo } from "../StyledComponent";
import ExternalButton from "./ExternalButton";
import { BannerContainer, ButtonBox, DescTypo, TitleBox } from "./styles";
import { forwardRef } from "react";

const StyledTitleTypo = styled(TitleTypo)`
    font-size: 32px;
    color: #fff;

    @media only screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

const Banner = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <BannerContainer ref={ref}>
            <TitleBox>
                <StyledTitleTypo>{BannerSectionTitle}</StyledTitleTypo>
                <DescTypo>{BannerSectionDesc}</DescTypo>
            </TitleBox>
            <ButtonBox>
                {ButtonItems.map((value) => {
                    return <ExternalButton key={value.alt} color={value.color} icon={value.icon} arrowIcon={value.arrowIcon} alt={value.alt} url={value.url} />;
                })}
            </ButtonBox>
        </BannerContainer>
    );
});
Banner.displayName = "Banner";

export default Banner;
