import { FIRMACHAIN_URI } from "../../../constants/uri";
import { LinkExternal } from "../../Button/linkExternal";
import { FirmachainHeaderLogoImage } from "../../Images";
import DungeonButton from "../dungeonButton";
import { HeaderContainer, LogoWrap } from "../styles";

interface IProps {
    headerColor: "WHITE" | "BLACK";
}

const Desktop = ({ headerColor }: IProps) => {
    return (
        <HeaderContainer>
            <LogoWrap onClick={() => LinkExternal(FIRMACHAIN_URI)}>
                <FirmachainHeaderLogoImage color={headerColor} />
            </LogoWrap>
            <DungeonButton />
        </HeaderContainer>
    );
};

export default Desktop;
