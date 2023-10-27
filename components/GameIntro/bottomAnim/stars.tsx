import styled from "styled-components";
import { IconStars } from "../../Images";

const ItemBox = styled.div`
    position: absolute;
    left: 0%;
    transform: translate(50%, 0%);

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ItemWrap = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
`;

const StarsBackLight = styled.div`
    position: absolute;
    bottom: 0;
    width: 76px;
    height: 109px;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #ffc700 100%);
`;

const StarsAnim = () => {
    return (
        <ItemBox>
            <ItemWrap>
                <IconStars />
                <StarsBackLight />
            </ItemWrap>
        </ItemBox>
    );
};

export default StarsAnim;
