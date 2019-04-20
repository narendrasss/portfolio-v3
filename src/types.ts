interface MetadataQueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface SiteMetadata {
  name: string;
  tagline: string;
}
