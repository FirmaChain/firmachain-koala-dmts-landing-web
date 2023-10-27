import { ExternalTypo, ExternalWrap, Wrap } from "./styles";
import IconFooterExternalArrow from "../Images/Arrows/ic-footer-arrow-external";
import { LinkExternal } from "../Button/linkExternal";

interface IProps {
    title: string;
    url: string;
}

const ExternalButton = ({ title, url }: IProps) => {
    return (
        <ExternalWrap onClick={() => LinkExternal(url)}>
            <Wrap>
                <ExternalTypo>{title}</ExternalTypo>
                <IconFooterExternalArrow />
            </Wrap>
        </ExternalWrap>
    );
};

export default ExternalButton;
