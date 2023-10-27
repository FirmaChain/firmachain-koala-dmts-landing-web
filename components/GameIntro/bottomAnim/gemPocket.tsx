import styled from "styled-components";
import { IconGemPocket } from "../../Images";

const BoxWrap = styled.div`
    margin: -20px 0 -15px;
    z-index: 0;

    position: absolute;
    left: calc(0% + 100px);
    transform: translate(50%, 0%);

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const GemPocketAnim = () => {
    return (
        <BoxWrap>
            <IconGemPocket />
        </BoxWrap>
    );
};

export default GemPocketAnim;
