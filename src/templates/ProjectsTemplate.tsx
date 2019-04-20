import { graphql } from 'gatsby';
import React from 'react';

interface ProjectsTemplateProps {
  data: PageQueryResult;
}

const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({
  data: { markdownRemark },
}) => {
  return (
    <article>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </article>
  );
};

export default ProjectsTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
