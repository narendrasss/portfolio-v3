import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import ProjectLink from '../components/ProjectLink/ProjectLink';

interface ProjectsPageProps {
  data: AllPagesQueryResult;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout alignItems="flex-start" justifyContent="center">
    {edges.map(({ node }) => (
      <ProjectLink key={node.id} {...node.frontmatter} />
    ))}
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
