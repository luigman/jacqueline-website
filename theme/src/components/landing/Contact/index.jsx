import React from "react";
import Container from "components/common/Container";
import TalkIllustration from "components/illustrations/TalkIllustration";
import ContactForm from "./ContactForm";
import { Wrapper, Details, Thumbnail } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
    <h1>Let's connect!</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <TalkIllustration />
    </Thumbnail>
  </Wrapper>
);
