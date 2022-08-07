import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <SocialLogo to="/">Araksha</SocialLogo>
        <FooterSubHeading>
          Find it. SuperEasy way to keep track of your stuff!
        </FooterSubHeading>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            © Copyright 2022, Araksha. All Rights Reserved
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
