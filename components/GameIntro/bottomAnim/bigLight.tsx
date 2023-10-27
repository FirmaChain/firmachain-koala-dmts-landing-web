import styled from "styled-components";
import { IconStarLightLarge } from "../../Images";

const ItemWrap = styled.div`
    width: 16px;
    display: flex;
    position: absolute;
    bottom: 65px;
    left: 30%;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const BigLightAnim = () => {
    return (
        <ItemWrap>
            <IconStarLightLarge />
        </ItemWrap>
    );
};

export default BigLightAnim;
