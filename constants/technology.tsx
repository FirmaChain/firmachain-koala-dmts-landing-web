import { TechEnterpriseImage, TechEnterpriseMobileImage, TechIBCImage, TechIBCMobileImage, TechSmartContractImage, TechSmartContractMobileImage } from "./assets";

interface ICarouselItem {
    img: string;
    imgMobile: string;
    title: string;
    desc: string[];
}

export const TechSectionTitle = "OUR TECHNOLOGY";
export const CarouselItems: ICarouselItem[] = [
    {
        title: "Smart\nContract",
        img: TechSmartContractImage,
        imgMobile: TechSmartContractMobileImage,
        desc: [
            `The 'KOA' (Koala Of Adventure) tokens acquired in Koala Knights can be extended in value through 'KoalaFi'.`,
            `Moreover, utilizing IBC (Inter Blockchain Communication), you can explore more opportunities beyond the Koala Knights ecosystem.`,
        ],
    },
    {
        title: "IBC & De-Fi",
        img: TechIBCImage,
        imgMobile: TechIBCMobileImage,
        desc: [
            `Koala Knights features an open possibility to multi-chains and incorporates 'CosmWasm' for enhanced security.`,
            `Explore over 8 contracts encompassing game bridging between Web 2.0 and 3.0, asset issuance and management, and a marketplace.`,
        ],
    },
    {
        title: "Enterprise",
        img: TechEnterpriseImage,
        imgMobile: TechEnterpriseMobileImage,
        desc: [
            `With a single wallet, you can manage various assets in the Cosmos ecosystem.`,
            `Utilize the user-friendly and highly efficient Wallet Connect feature, designed to provide you with a seamless experience as you link and integrate a wide range of assets directly into the Koala Knights platform.`,
        ],
    },
];
