import { useEffect, useState } from "react";
import { IconFirmachain, IconAtomLogo, IconBtcLogo, IconDaiLogo, IconEthLogo, IconUsdtAxlLogo, IconKoalaLogo, IconOsmoLogo, IconPolygonUsdcLogo, IconUsdcLogo, IconUsdtLogo } from "../Images";

import { CenterLogoImage, ChainGroupBox, ChainGroupContainer } from "./styles";
import { useBrowerSizeDetect } from "../../hooks/useResize";

const ChainGroup = () => {
    const [scale, setScale] = useState(1);
    const { size } = useBrowerSizeDetect();

    const calculateScale = () => {
        let baseWidth = size.width >= 768 ? 1920 : 390;
        const currentWidth = size.width;
        return currentWidth / baseWidth;
    };

    const handleResize = () => {
        const newScale = calculateScale();
        setScale(newScale);
    };

    useEffect(() => {
        handleResize();
    }, [size]);

    return (
        <ChainGroupContainer>
            <ChainGroupBox $scale={scale}>
                <IconUsdcLogo />
                <IconAtomLogo />
                <IconBtcLogo />
                <IconEthLogo />

                <IconUsdtAxlLogo />
                <IconUsdtLogo />
                <IconDaiLogo />
                <IconOsmoLogo />
                <IconPolygonUsdcLogo />
                <IconKoalaLogo />
                <CenterLogoImage>
                    <IconFirmachain />
                </CenterLogoImage>
            </ChainGroupBox>
        </ChainGroupContainer>
    );
};

export default ChainGroup;
