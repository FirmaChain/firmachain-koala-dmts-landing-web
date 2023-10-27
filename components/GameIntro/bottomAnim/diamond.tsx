import styled from "styled-components";
import { IconBox, IconDiamond } from "../../Images";

const ItemBox = styled.div`
    position: absolute;
    left: calc(0% + 70px);
    transform: translate(50%, 0%);

    @media only screen and (max-width: 768px) {
        left: 0%;
        left: calc(5%);
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

const BoxWrap = styled.div`
    margin: -20px 0 -15px;
    z-index: 0;

    @media only screen and (max-width: 768px) {
        margin: -10px 0 -8px;
    }
`;

const DiamondbackLight = styled.div`
    position: absolute;
    bottom: 13px;
    width: 19px;
    height: 95px;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #94faff 82.29%, #256b6f 100%);

    @media only screen and (max-width: 768px) {
        width: 12.6px;
        height: 63.3px;
    }
`;

const DiamondAnim = () => {
    return (
        <ItemBox>
            <ItemWrap>
                <IconDiamond />
                <BoxWrap>
                    <IconBox />
                </BoxWrap>
                <DiamondbackLight />
            </ItemWrap>
        </ItemBox>
    );
};

export default DiamondAnim;
