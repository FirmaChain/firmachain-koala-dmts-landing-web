import styled from "styled-components";
import { GameBlockTileImage } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 100%;
    min-width: 1920px;
    height: 24px;
    position: relative;
    image-rendering: pixelated;
`;

const ImageBlockTile = () => {
    return (
        <Wrap>
            <ImageComponent src={GameBlockTileImage} alt={"BLOCK TILE"} />;
        </Wrap>
    );
};

export default ImageBlockTile;
