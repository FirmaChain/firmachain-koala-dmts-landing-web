import { ArticleCosmwasmIcon, ArticleDocsIcon, ArticleGithubIcon, ArticleMediumIcon, ArticleTechnicalImage } from "./assets";
import { COSMWASM_URI, DOCS_URI, GITHUB_URI, MEDIUM_URI } from "./uri";

interface ICarouselItem {
    title: string;
    img: string;
    desc: string;
}

interface IExternalItem {
    url: string;
    img: string;
    alt: string;
}

export const ArticleSectionTitle = "Technical Articles";
export const ArticleSectionDesc = {
    desktop: "Utilitainment that combines utility and entertainment.\nFIRMACHAIN anticipates scalability into various fields.",
    mobile: "Utilitainment that combines utility and\nentertainment. FIRMACHAIN anticipates\nscalability into various fields.",
};
export const CarouselItems: ICarouselItem[] = [
    {
        title: `FIRMACHAIN Lists on Global Cryptocurrency Exchange ‘Huobi Global’`,
        img: ArticleTechnicalImage,
        desc: `Hello. This is FirmaChain. Trust based global blockchain platform FIRMACHAIN’s token FCT will list on Huobi Global cryptocurrency exchange on the 17th of August (Thursday). Following is the listing schedule we received from Huobi cryptocurrency exchange. Huobi will support the deposit of FIRMACHAIN starting...`,
    },
    {
        title: `FIRMACHAIN Lists on Global Cryptocurrency Exchange ‘Huobi Global’`,
        img: ArticleTechnicalImage,
        desc: `Hello. This is FirmaChain. Trust based global blockchain platform FIRMACHAIN’s token FCT will list on Huobi Global cryptocurrency exchange on the 17th of August (Thursday). Following is the listing schedule we received from Huobi cryptocurrency exchange. Huobi will support the deposit of FIRMACHAIN starting...`,
    },
    {
        title: `FIRMACHAIN Lists on Global Cryptocurrency Exchange ‘Huobi Global’`,
        img: ArticleTechnicalImage,
        desc: `Hello. This is FirmaChain. Trust based global blockchain platform FIRMACHAIN’s token FCT will list on Huobi Global cryptocurrency exchange on the 17th of August (Thursday). Following is the listing schedule we received from Huobi cryptocurrency exchange. Huobi will support the deposit of FIRMACHAIN starting...`,
    },
];
export const ExternalItems = [
    { url: COSMWASM_URI, img: ArticleCosmwasmIcon, alt: "COSMWASM" },
    { url: GITHUB_URI, img: ArticleGithubIcon, alt: "GITHUB" },
    { url: DOCS_URI, img: ArticleDocsIcon, alt: "DOCS" },
    { url: MEDIUM_URI, img: ArticleMediumIcon, alt: "MEDIUM" },
];
