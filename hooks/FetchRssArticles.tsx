import axios from 'axios';
import { MEDIUM_RSS } from '../constants/uri';
import { parseString } from 'xml2js';
import { stripHtml } from 'string-strip-html';
import { IArticle } from '../pages';

export const FetchRssArticles = async () => {
  try {
    const response = await axios.get(MEDIUM_RSS);
    const xmlData = response.data;

    const parsedData = await new Promise<IArticle[]>((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const itemElements = result.rss.channel[0].item;
          const articles: IArticle[] = itemElements
            .filter((item: any) => {
              const category = item.category[0];
              return category && category.indexOf('english') !== -1;
            })
            .map((item: any) => {
              const title = item.title[0];
              const content = item['content:encoded'][0];
              const link = item.link[0];
              const img = content.match(/<img.*?src=["'](.*?)["']/);
              const strippedContent = stripHtml(content).result;

              let imgReplace = img ? img[1] : '';
              if (imgReplace === 'https://cdn-images-1.medium.com/max/1024/1*qm2NYYoKo5a9JFKIaRRlnA.png') {
                imgReplace = '/images/img_firma_explorer.png';
              }

              return {
                title,
                content: strippedContent,
                link,
                img: imgReplace,
              };
            });
          resolve(articles);
        }
      });
    });

    return parsedData;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
};
