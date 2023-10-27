import styled from "styled-components";
import { MainKoalaKnightsIcon } from "../../constants/assets";
import ImageComponent from "./ImageComponent";

const Wrap = styled.div`
    width: 56px;
    height: 56px;
    position: relative;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const IconKoalaknights = () => {
    return (
        <Wrap>
            <ImageComponent src={MainKoalaKnightsIcon} alt={"KOALA KNIGHTS"} />
        </Wrap>
    );
};

export default IconKoalaknights;
