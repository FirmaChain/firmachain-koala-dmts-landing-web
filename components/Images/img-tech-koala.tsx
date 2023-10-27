import styled from "styled-components";
import { TechKoalaImage } from "../../constants/assets";
import ImageComponent from "./ImageComponent";

const Wrap = styled.div`
    width: 52px;
    height: 52px;
    position: relative;
`;

const ImageTechKoala = () => {
    return (
        <Wrap>
            <ImageComponent src={TechKoalaImage} alt={"KOALA"} />
        </Wrap>
    );
};

export default ImageTechKoala;
