import {
  SocialMediaHoverIcon,
  SocialMediaIcon,
  SocialRadditlHoverIcon,
  SocialRadditlIcon,
  SocialTelegramHoverIcon,
  SocialTelegramIcon,
  SocialTwitterHoverIcon,
  SocialTwitterIcon,
} from './assets';
import {
  FIRMACHAIN_URI,
  FIRMACHAIN_VERIFY_URI,
  KOALA_HUB_URI,
  MEDIUM_URI,
  RADDIT_URI,
  TELEGRAM_URI,
  TWITTER_URI,
} from './uri';

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
  { title: 'FIRMACHAIN', url: 'https://firmachain.org' },
  { title: 'Community', url: 'https://station.firmachain.io/community' },
  { title: 'Github', url: 'https://github.com/firmachain' },
];

export const FooterExternalItems: IExternalItem[][] = [
  [
    { title: 'FIRMACHAIN', url: 'https://firmachain.org' },
    { title: 'Community', url: 'https://station.firmachain.io/community' },
    { title: 'Github', url: 'https://github.com/firmachain' },
  ],
  [],
];

export const FooterSocialItems: ISocialItem[] = [
  { alt: 'MEDIA', img: SocialMediaHoverIcon, url: MEDIUM_URI },
  { alt: 'RADDIT', img: SocialRadditlHoverIcon, url: RADDIT_URI },
  { alt: 'TELEGRAM', img: SocialTelegramHoverIcon, url: TELEGRAM_URI },
  { alt: 'TWITTER', img: SocialTwitterHoverIcon, url: TWITTER_URI },
];
