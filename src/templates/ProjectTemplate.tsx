import { graphql } from 'gatsby';
import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Github } from 'styled-icons/boxicons-logos';
import Layout from '../components/Layout/Layout';
import Box from '../components/base/Box';
import Heading from '../components/base/Heading';
import Text from '../components/base/Text';
import List from '../components/base/List';

interface ProjectTemplateProps {
  data: PageQueryResult;
}

const Header = styled(Flex).attrs({ as: 'header' })`
  flex-direction: column;
  align-items: center;
`;

const TechList = styled(Text)`
  text-transform: capitalize;
`;

const Info = styled(Flex)`
  width: 80%;
  justify-content: space-between;
`;

const SubHeading = styled(Heading)`
  font-size: 2rem;
  font-family: ${themeGet('fonts.sans')};
`;

const Article = styled(Box).attrs({ as: 'article' })`
  > * {
    margin-bottom: 1.8em;
  }
  h3 {
    margin-bottom: 1em;
  }
`;

const Link = styled.a`
  color: ${themeGet('colors.grays.2')};
  margin-top: 2rem;
`;

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  data: { markdownRemark },
}) => {
  const { html, frontmatter } = markdownRemark;
  return (
    <Layout p="4rem">
      <Header mt="16rem">
        <Heading>{frontmatter.title}</Heading>
        <TechList color="grays.2" mt="2rem">
          {frontmatter.tech.join(', ')}
        </TechList>
        <Link href={frontmatter.github}>
          <Github size="4rem" />
        </Link>
        <Info my="10rem">
          <Box>
            <SubHeading mb="2rem">For</SubHeading>
            <Text>{frontmatter.client}</Text>
          </Box>
          <Box>
            <SubHeading mb="2rem">Team</SubHeading>
            <List items={frontmatter.team}>
              {member => <Text>{member}</Text>}
            </List>
          </Box>
        </Info>
      </Header>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tech
        description
        github
        client
        team
      }
    }
  }
`;
