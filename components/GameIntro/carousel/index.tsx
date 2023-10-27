import { Fragment } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Carousel = () => {
    return (
        <Fragment>
            <Desktop />
            <Mobile />
        </Fragment>
    );
};

export default Carousel;
