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
  url: string;
  links: LinkTo[];
}

interface LinkTo {
  name: string;
  url: string;
}

interface PageFrontmatter {
  path: string;
  title: string;
}
