import { FooterSocialItems } from "../../constants/gnb";
import { CONTACT_MAIL } from "../../constants/uri";
import { LinkMail } from "../Button/linkExternal";
import { IconSocialItem } from "../Images";
import { ContactBox, ContactTitle, ContactURI, ContactWrap, SocialWrap } from "./styles";

const Contact = () => {
    return (
        <ContactBox>
            <ContactWrap>
                <ContactTitle>{"Contact Us"}</ContactTitle>
                <SocialWrap>
                    {FooterSocialItems.map((value) => {
                        return <IconSocialItem key={value.alt} alt={value.alt} img={value.img} url={value.url} />;
                    })}
                </SocialWrap>
                <ContactURI onClick={() => LinkMail(CONTACT_MAIL)}>{CONTACT_MAIL}</ContactURI>
            </ContactWrap>
        </ContactBox>
    );
};

export default Contact;
