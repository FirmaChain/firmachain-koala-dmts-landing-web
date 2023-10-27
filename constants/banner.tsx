import {
    BannerArrowFirmachainIcon,
    BannerArrowFirmachainIconHover,
    BannerArrowKoalaIcon,
    BannerArrowKoalaIconHover,
    BannerArrowVerifyIcon,
    BannerArrowVerifyIconHover,
    BannerFirmachainIcon,
    BannerFirmachainIconHover,
    BannerKoalaIcon,
    BannerVerifyIcon,
} from "./assets";
import { FIRMACHAIN_URI, FIRMACHAIN_VERIFY_URI, KOALA_HUB_URI } from "./uri";

interface IButtonItem {
    color: string[];
    icon: string[];
    url: string;
    alt: string;
    arrowIcon: string[];
}

export const BannerSectionTitle = "Expand Your Sight";
export const BannerSectionDesc = "It will entertain you and make you\ntake a look at it.";

export const ButtonItems = [
    { color: ["#E26B3C", "#F9672E"], icon: [BannerKoalaIcon], url: KOALA_HUB_URI, alt: "KOALA KNIGHT", arrowIcon: [BannerArrowKoalaIcon, BannerArrowKoalaIconHover] },
    {
        color: ["#FDFDFD", "#494949"],
        icon: [BannerFirmachainIcon, BannerFirmachainIconHover],
        url: FIRMACHAIN_URI,
        alt: "FIRMACHAIN",
        arrowIcon: [BannerArrowFirmachainIcon, BannerArrowFirmachainIconHover],
    },
    { color: ["#4D77C8", "#0047CF"], icon: [BannerVerifyIcon], url: FIRMACHAIN_VERIFY_URI, alt: "FIRMACHAIN VERIFY", arrowIcon: [BannerArrowVerifyIcon, BannerArrowVerifyIconHover] },
];
