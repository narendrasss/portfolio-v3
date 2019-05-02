import React from 'react';
import { render } from 'react-testing-library';
import ProjectLink from './ProjectLink';

describe('ProjectLink', () => {
  const mockFrontmatter = {
    path: '/projects/coin',
    title: 'Coin',
    tech: ['react', 'typescript'],
    description: 'Web based financial management',
  };

  it('renders the project title', () => {
    const { queryByText } = render(<ProjectLink {...mockFrontmatter} />);
    expect(queryByText(mockFrontmatter.title)).toBeTruthy();
  });

  it('renders the project tech stack', () => {
    const { queryByText } = render(<ProjectLink {...mockFrontmatter} />);
    mockFrontmatter.tech.forEach(tech => {
      expect(queryByText(tech)).toBeTruthy();
    });
  });

  it('renders the project description', () => {
    const { queryByText } = render(<ProjectLink {...mockFrontmatter} />);
    expect(queryByText(mockFrontmatter.description)).toBeTruthy();
  });
});
