import React from 'react';
import { Heading as BaseHeading, HeadingProps } from 'rebass';

const Heading: React.FC<HeadingProps> = props => (
  <BaseHeading as="h1" fontSize={2} lineHeight="title" {...props} />
);

export default Heading;
