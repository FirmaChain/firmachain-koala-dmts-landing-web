import styled from "styled-components";
import { ImageBlockTile } from "../../Images";
import StarsAnim from "./stars";
import DiamondAnim from "./diamond";
import GemPocketAnim from "./gemPocket";
import SoldierAnim from "./soldier";
import BigLightAnim from "./bigLight";
import LightsAnim from "./lights";
import BoxAnim from "./box";
import KoalaAnim from "./koala";
import FirmaChianAnim from "./firmachain";

const BottomAnim = () => {
    return (
        <AnimContainer>
            <AnimWrap>
                <StarsAnim />
                <DiamondAnim />
                <GemPocketAnim />
                <SoldierAnim />
                <BigLightAnim />
                <LightsAnim />
                <BoxAnim />
                <KoalaAnim />
                <FirmaChianAnim />
            </AnimWrap>
            <ImageBlockTile />
        </AnimContainer>
    );
};

export default BottomAnim;

const AnimContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 125px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`;

const AnimWrap = styled.div`
    width: 100%;
    height: 100%;
    min-height: 85px;
    max-width: 1180px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
`;
