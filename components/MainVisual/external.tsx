import { ExternalItems } from "../../constants/mainVisual";
import ExternalButton from "../Button/externalButton";
import { ExternalBackground, ExternalBox } from "./styles";

const External = () => {
    const onClickExternal = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <ExternalBox>
            <ExternalBackground />
            {ExternalItems.map((value) => {
                return <ExternalButton key={value.title} title={value.title} onClick={() => onClickExternal(value.url)} />;
            })}
        </ExternalBox>
    );
};

export default External;
