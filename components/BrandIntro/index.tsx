import styled from "styled-components";
import { ContentContainer } from "../StyledComponent";
import ChainGroup from "./chainGroup";
import TitleBox from "./titleBox";
import { forwardRef } from "react";

const Container = styled(ContentContainer)`
    min-height: 100vh;

    @media only screen and (max-width: 768px) {
        min-height: 100%;
        height: auto;
    }
`;

const BrandIntro = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <Container ref={ref}>
            <TitleBox />
            <ChainGroup />
        </Container>
    );
});
BrandIntro.displayName = "BrandIntro";

export default BrandIntro;
