import styled from "styled-components";
import { IconKoala, IconSword } from "../../Images";

const ItemWrap = styled.div`
    width: 75px;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 768px) {
        transform: translate(-10px, 0);
    }
`;

const KoalaAnim = () => {
    return (
        <ItemWrap>
            <IconKoala />
            <IconSword />
        </ItemWrap>
    );
};

export default KoalaAnim;
