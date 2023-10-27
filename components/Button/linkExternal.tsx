export const LinkExternal = (uri: string) => {
    window.open(uri, "_blank");
};

export const LinkMail = (mail: string) => {
    window.open(`mailto:${mail}`);
};
