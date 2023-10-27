import styled from "styled-components";
import { IconBox } from "../../Images";

const ItemWrap = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;

    right: 25%;
    bottom: -15px;
    transform: translate(-50%, 0);

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const BoxAnim = () => {
    return (
        <ItemWrap style={{ width: "50px" }}>
            <IconBox />
        </ItemWrap>
    );
};

export default BoxAnim;
