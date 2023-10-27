import styled from "styled-components";
import { IconFirmachainPixel, IconStairs, IconTorch } from "../../Images";

const ItemWrap = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;
    right: 0;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 768px) {
        transform: translate(-10%, 0%);
    }
`;

const AnimWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    gap: 30px;
    margin-left: 25px;

    @media only screen and (max-width: 768px) {
        gap: 20px;
        margin-left: 20px;
    }
`;

const FirmachainWrap = styled.div`
    position: absolute;
`;

const FirmachainBackLight = styled.div`
    position: absolute;
    width: 56px;
    height: 77px;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #faff00 68.75%);

    @media only screen and (max-width: 768px) {
        width: 37.54px;
        height: 51.57px;
    }
`;

const FirmaChianAnim = () => {
    return (
        <ItemWrap style={{ width: "88px" }}>
            <AnimWrap>
                <IconTorch />
                <IconTorch />
                <FirmachainBackLight />
                <FirmachainWrap>
                    <IconFirmachainPixel />
                </FirmachainWrap>
            </AnimWrap>
            <IconStairs />
        </ItemWrap>
    );
};

export default FirmaChianAnim;
