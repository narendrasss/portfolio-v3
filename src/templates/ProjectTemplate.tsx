import { graphql } from 'gatsby';
import React from 'react';

interface ProjectTemplateProps {
  data: PageQueryResult;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  data: { markdownRemark },
}) => {
  const { html, frontmatter } = markdownRemark;
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
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
