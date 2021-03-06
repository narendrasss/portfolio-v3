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

interface AllPagesQueryResult {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: PageFrontmatter;
      };
    }[];
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
  tech: string[];
  description: string;
  github: string;
  client: string;
  team: string[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
