import styled from "styled-components";
import { ArticleArrowIcon } from "../../../constants/assets";
import ImageComponent from "../ImageComponent";

const Wrap = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
`;

const IconArticleArrow = () => {
    return (
        <Wrap>
            <ImageComponent src={ArticleArrowIcon} alt={"KOALA"} />
        </Wrap>
    );
};

export default IconArticleArrow;
