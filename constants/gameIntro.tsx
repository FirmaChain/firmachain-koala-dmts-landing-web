import {
  CarouselInventoryImage as CarouselInventoryImage,
  CarouselEventImage,
  CarouselMarketImage,
  CarouselWorldImage,
  CarouselGameFIImage,
} from './assets';

interface ICarouselItem {
  img: string;
  title: string;
  desc: string;
}
export const GameSectionTitle =
  'Koala Knights is a Play-to-Earn (P2E) game\nthat combines fun with blockchain technology.';

export const CarouselItems: ICarouselItem[] = [
  {
    img: CarouselGameFIImage,
    title: 'Quest',
    desc: 'All Koala Knights assets, unlock greater possibilities with Koala-Fi.',
  },
  {
    img: CarouselInventoryImage,
    title: 'Inventory',
    desc: 'Connect your own NFTs to Koala Knights with the friendliest user interface!',
  },
  {
    img: CarouselEventImage,
    title: 'Event',
    desc: "Always delightful events await you. Don't miss the unexpected rewards.",
  },
  {
    img: CarouselWorldImage,
    title: 'Koala World',
    desc: 'Explore the world of Koala Knights! Various dungeons await you.',
  },
  {
    img: CarouselMarketImage,
    title: 'Marketplace',
    desc: 'Trade NFTs acquired through various methods: gacha, adventure, and more!',
  },
];

export const CarouselItemsMobile: ICarouselItem[] = [
  {
    img: CarouselEventImage,
    title: 'Event',
    desc: "Always delightful events await you. Don't miss the unexpected rewards.",
  },
  {
    img: CarouselWorldImage,
    title: 'Koala World',
    desc: 'Explore the world of Koala Knights! Various dungeons await you.',
  },
  {
    img: CarouselInventoryImage,
    title: 'Inventory',
    desc: 'Connect your own NFTs to Koala Knights with the friendliest user interface!',
  },
  {
    img: CarouselGameFIImage,
    title: 'Quest',
    desc: 'All Koala Knights assets, unlock greater possibilities with Koala-Fi.',
  },
  {
    img: CarouselMarketImage,
    title: 'Marketplace',
    desc: 'Trade NFTs acquired through various methods: gacha, adventure, and more!',
  },
];
