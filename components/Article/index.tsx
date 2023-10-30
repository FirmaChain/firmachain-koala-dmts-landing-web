import styled from 'styled-components';
import { AritcleBackgroundImage } from '../../constants/assets';
import { ContentContainer } from '../StyledComponent';
import Carousel from './carousel';
import TitleBox from './titleBox';
import { forwardRef, useEffect, useState } from 'react';
import { IArticle } from '../../pages';
import { API } from '../../api';

const Container = styled(ContentContainer)`
  height: auto;
  background-image: url(${AritcleBackgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1180px) {
    padding: 0 0 150px;
  }
`;

interface IProps {
  articles: IArticle[];
}

const Article = forwardRef<HTMLDivElement, IProps>(({ articles }, ref) => {
  // TODO
  // Article 정보를 medium이 아닌 api를 통해 불러올것.

  // const [articles, setArticles] = useState<IArticle[]>([]);

  // useEffect(() => {
  //     const getList = async () => {
  //         try {
  //             const res = await API.getNewsList();
  //             const result = res.data;
  //             if (result !== undefined) {
  //                 setArticles(result);
  //             }
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };

  //     getList();
  // }, []);

  return (
    <Container ref={ref}>
      <TitleBox />
      <Carousel articles={articles} />
    </Container>
  );
});
Article.displayName = 'Article';

export default Article;
