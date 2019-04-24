import React from 'react';
import Link from '../base/Link';
import { Flex } from 'rebass';
import Heading from '../base/Heading';
import Text from '../base/Text';
import Box from '../base/Box';
import List from '../base/List';

const ProjectLink: React.FC<PageFrontmatter> = ({
  path,
  title,
  description,
  tech,
}) => (
  <Link to={path}>
    <Flex alignItems="center">
      <Heading fontSize={1}>{title}</Heading>
      <Box>
        <Text fontSize="2rem">{description}</Text>
        <Flex>
          <List items={tech}>
            {technology => (
              <Text key={technology} fontWeight={300} fontSize="2rem">
                {technology}
              </Text>
            )}
          </List>
        </Flex>
      </Box>
    </Flex>
  </Link>
);

export default ProjectLink;
