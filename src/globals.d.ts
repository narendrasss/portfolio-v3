declare module '*.ico';
declare module '*.png';

interface MetadataQueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface PageQueryResult {
  markdownRemark: {
    html: string;
    frontmatter: PageFrontmatter;
  };
}

interface SiteMetadata {
  title: string;
  description: string;
  name: string;
  tagline: string;
}

interface PageFrontmatter {
  path: string;
  title: string;
}
