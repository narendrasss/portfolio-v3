import { graphql, useStaticQuery } from 'gatsby';

export const useMetadata = () => {
  const data: MetadataQueryResult = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          name
          tagline
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
