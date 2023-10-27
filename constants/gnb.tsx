import { SocialMediaHoverIcon, SocialMediaIcon, SocialRadditlHoverIcon, SocialRadditlIcon, SocialTelegramHoverIcon, SocialTelegramIcon, SocialTwitterHoverIcon, SocialTwitterIcon } from "./assets";
import { FIRMACHAIN_URI, FIRMACHAIN_VERIFY_URI, KOALA_HUB_URI, MEDIUM_URI, RADDIT_URI, TELEGRAM_URI, TWITTER_URI } from "./uri";

interface IExternalItem {
    title: string;
    url: string;
}

interface ISocialItem {
    alt: string;
    img: string;
    url: string;
}

export const MenuExternalItems: IExternalItem[] = [
    { title: "Smart Contract", url: "" },
    { title: "IBC", url: "" },
    { title: "Core", url: "" },
];

export const FooterExternalItems: IExternalItem[][] = [
    [
        { title: "Smart Contract", url: "" },
        { title: "IBC & DeFi", url: "" },
        { title: "Enterprise", url: "" },
    ],
    [
        { title: "Koala Knights", url: KOALA_HUB_URI },
        { title: "FIRMACHAIN", url: FIRMACHAIN_URI },
        { title: "Verify", url: FIRMACHAIN_VERIFY_URI },
    ],
];

export const FooterSocialItems: ISocialItem[] = [
    { alt: "MEDIA", img: SocialMediaHoverIcon, url: MEDIUM_URI },
    { alt: "RADDIT", img: SocialRadditlHoverIcon, url: RADDIT_URI },
    { alt: "TELEGRAM", img: SocialTelegramHoverIcon, url: TELEGRAM_URI },
    { alt: "TWITTER", img: SocialTwitterHoverIcon, url: TWITTER_URI },
];
