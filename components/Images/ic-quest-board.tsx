import styled from "styled-components";
import { ArticleQuesboardIcon } from "../../constants/assets";
import ImageComponent from "./ImageComponent";

const Wrap = styled.div`
    width: 72px;
    height: 72px;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 56px;
        height: 56px;
    }
`;

const IconQuestBoard = () => {
    return (
        <Wrap>
            <ImageComponent src={ArticleQuesboardIcon} alt={"QUEST BOARD"} />
        </Wrap>
    );
};

export default IconQuestBoard;
