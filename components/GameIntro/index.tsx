import { ContentContainer } from "../StyledComponent";
import { Box, TopShape } from "./styles";
import Carousel from "./carousel";
import TitleBox from "./titleBox";
import BottomAnim from "./bottomAnim";
import { forwardRef } from "react";

const GameIntro = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <ContentContainer style={{ backgroundColor: "#101721" }} ref={ref}>
            <Box>
                <TopShape />
                <TitleBox />
                <Carousel />
                <BottomAnim />
            </Box>
        </ContentContainer>
    );
});
GameIntro.displayName = "GameIntro";

export default GameIntro;
