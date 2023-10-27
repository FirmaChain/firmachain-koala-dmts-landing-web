import { GameSectionTitle } from "../../constants/gameIntro";
import { ImageKoalaknightsGameTypo } from "../Images";
import { Box, ItroTypo, TitleContainer } from "./styles";

const TitleBox = () => {
    return (
        <TitleContainer>
            <ImageKoalaknightsGameTypo />
            <ItroTypo>{GameSectionTitle}</ItroTypo>
        </TitleContainer>
    );
};

export default TitleBox;
