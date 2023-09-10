import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import Card from "components/common/Card";
import thumbnail from "assets/thumbnail/thumbnail.png";
import { Wrapper, Content, Thumbnail } from "./styles";

export const useProjects = () => {
  const {
    content
  } = useStaticQuery(graphql`
  query {
    content: allMarkdownRemark(filter: {frontmatter: { section: { eq: "project" } }}) {
      edges{
      node{
      frontmatter {
        title
        description
        action
      }
    }
  }
    }
  }
`)
  console.log(content)
  return content.edges;
}

export default () => {
  const edges = useProjects()
  console.log(edges)
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Flex col={4}>
        {edges.map(
          ({node: {frontmatter: { title, description, action }}}) => (
            <Item
              key={title}
              col={4}
              colTablet={6}
              colMobile={12}
              marginBottom={30}
              gap={1}
              stretch
            >
              <Card as="a" href={`/${action}/story.html`} target="_blank" rel="noopener noreferrer">
                <Content>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </Content>
                <Thumbnail>
                  <img src={`/${action}/${action}_icon.png`} alt="icon" />
                </Thumbnail>
              </Card>
            </Item>
          )
        )}
      </Flex>
    </Wrapper>
  );
};
