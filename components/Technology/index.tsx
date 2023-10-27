import { TechBackgroundImage } from "../../constants/assets";
import { TechSectionTitle } from "../../constants/technology";
import { ImageTechKoala } from "../Images";
import { ContentContainer, TitleTypo } from "../StyledComponent";
import { TitleBox, TitleWrapWithCharacter } from "./styles";
import Carousel from "./carousel";
import { forwardRef } from "react";

const Technology = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <ContentContainer ref={ref} style={{ height: "auto", backgroundImage: `url(${TechBackgroundImage})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <TitleBox>
                <TitleTypo>{TechSectionTitle}</TitleTypo>
                <TitleWrapWithCharacter>
                    <TitleTypo>{" in"}</TitleTypo>
                    <ImageTechKoala />
                </TitleWrapWithCharacter>
            </TitleBox>
            <Carousel />
        </ContentContainer>
    );
});

Technology.displayName = "Technology";

export default Technology;
