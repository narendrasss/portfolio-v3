import { graphql, useStaticQuery } from 'gatsby';

export const useMetadata = () => {
  const data: MetadataQueryResult = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          description
          url
          links {
            name
            url
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
