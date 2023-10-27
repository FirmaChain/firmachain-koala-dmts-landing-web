import styled from "styled-components";
import { IconStarLightLarge, IconStarLightSmall } from "../../Images";

const AnimWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;

    right: 35%;
    bottom: -5px;
    transform: translate(-50%, 0);

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ItemWrap = styled.div`
    width: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
`;
const StarLarge = styled.div`
    position: absolute;
    bottom: 65px;
`;

const StarSmall = styled.div`
    position: absolute;
    bottom: 50px;
`;

const LightsAnim = () => {
    return (
        <AnimWrap style={{ width: "20px" }}>
            <ItemWrap>
                <StarLarge>
                    <IconStarLightLarge />
                </StarLarge>
            </ItemWrap>
            <ItemWrap>
                <StarSmall>
                    <IconStarLightSmall />
                </StarSmall>
            </ItemWrap>
        </AnimWrap>
    );
};

export default LightsAnim;
