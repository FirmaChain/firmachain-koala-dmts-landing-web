import { Fragment } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface IProps {
    headerColor: "WHITE" | "BLACK";
}

const Header = ({ headerColor }: IProps) => {
    return (
        <Fragment>
            <Desktop headerColor={headerColor} />
            <Mobile headerColor={headerColor} />
        </Fragment>
    );
};

export default Header;
