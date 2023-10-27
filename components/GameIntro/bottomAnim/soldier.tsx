import styled from "styled-components";
import { IconSoldier } from "../../Images";

const ReverseLayout = styled.div`
    width: 85px;
    transform: scaleX(-1);

    position: absolute;
    left: 20%;

    @media only screen and (max-width: 768px) {
        left: calc(10%);
    }
`;

const SoldierAnim = () => {
    return (
        <ReverseLayout>
            <IconSoldier />
        </ReverseLayout>
    );
};

export default SoldierAnim;
