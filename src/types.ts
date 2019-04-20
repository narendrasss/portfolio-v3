interface MetadataQueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface SiteMetadata {
  title: string;
  description: string;
  name: string;
  tagline: string;
}
