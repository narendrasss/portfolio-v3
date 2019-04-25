import React from 'react';
import Link from '../base/Link';
import { Flex } from 'rebass';
import Heading from '../base/Heading';
import Text from '../base/Text';
import List from '../base/List';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Tech = styled(Text)`
  text-transform: capitalize;
`;

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem;
  margin: 0 -3rem;
  border-top: 1px solid ${themeGet('colors.grays.1', '#efefef')};
  &:last-child {
    border-bottom: 1px solid ${themeGet('colors.grays.1', '#efefef')};
  }
`;

const ProjectLink: React.FC<PageFrontmatter> = ({
  path,
  title,
  description,
  tech,
}) => (
  <LinkContainer to={path}>
    <Heading flex="1" fontSize={2} fontFamily="sans" mb="1rem">
      {title}
    </Heading>
    <Text>{description}</Text>
    <Flex>
      <List items={tech}>
        {technology => (
          <Tech
            key={technology}
            color="grays.2"
            fontWeight={300}
            fontSize="1.5rem"
            mr="0.5rem"
          >
            {technology}
          </Tech>
        )}
      </List>
    </Flex>
  </LinkContainer>
);

export default ProjectLink;
