import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "components/theme/Header";
import Container from "components/common/Container";
import Button from "components/common/Button";
import DevIllustration from "components/illustrations/DevIllustration";
import profile from "assets/images/profile.jpg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export default () => {
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
        <Thumbnail>
          <img src={profile} alt="Profile image" />
          {/* <DevIllustration /> */}
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
