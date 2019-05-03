import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { KeyboardArrowRight } from 'styled-icons/material';
import { themeGet } from 'styled-system';
import Link from '../base/Link';
import Heading from '../base/Heading';
import Text from '../base/Text';
import List from '../base/List';
import Box from '../base/Box';

const Tech = styled(Text)`
  text-transform: capitalize;
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem;
  margin: 0 -${themeGet('space.1', '3rem')};
  border-top: 1px solid ${themeGet('colors.grays.1', '#efefef')};
  &:last-child {
    border-bottom: 1px solid ${themeGet('colors.grays.1', '#efefef')};
  }
`;

const DetailsIcon = styled(KeyboardArrowRight)`
  color: ${themeGet('colors.grays.1', '#efefef')};
`;

const ProjectLink: React.FC<PageFrontmatter> = ({
  path,
  title,
  description,
  tech,
}) => (
  <LinkContainer to={path}>
    <Box>
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
    </Box>
    <DetailsIcon size="6rem" />
  </LinkContainer>
);

export default ProjectLink;
