import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import ProjectLink from '../components/ProjectLink/ProjectLink';
import List from '../components/base/List';
import Heading from '../components/base/Heading';

interface ProjectsPageProps {
  data: AllPagesQueryResult;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout justifyContent="center">
    <Heading fontSize="5rem" my={3}>
      Projects
    </Heading>
    <List items={edges}>
      {({ node }) => <ProjectLink key={node.id} {...node.frontmatter} />}
    </List>
  </Layout>
);

export default ProjectsPage;

export const query = graphql`
  query AllPagesQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            tech
            description
          }
        }
      }
    }
  }
`;
