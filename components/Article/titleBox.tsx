import { ArticleSectionDesc, ArticleSectionTitle } from "../../constants/article";
import { useBrowerSizeDetect } from "../../hooks/useResize";
import { IconQuestBoard } from "../Images";
import { TitleTypo } from "../StyledComponent";
import { IntroTypo, TitleContainer, TitleWrap } from "./styles";

const TitleBox = () => {
    const { isMobile } = useBrowerSizeDetect();

    return (
        <TitleContainer>
            <IconQuestBoard />
            <TitleWrap>
                <TitleTypo>{ArticleSectionTitle}</TitleTypo>
                <IntroTypo>{isMobile ? ArticleSectionDesc.mobile : ArticleSectionDesc.desktop}</IntroTypo>
            </TitleWrap>
        </TitleContainer>
    );
};

export default TitleBox;
