import React from 'react';
import { TextProps } from 'rebass';
import { Text } from '../base/Text';

export interface DomainProps extends TextProps {
  url: string;
}

const Domain: React.FC<DomainProps> = ({ url, ...props }) => {
  const [name, domain] = url.split('.');
  return (
    <Text fontWeight={600} {...props}>
      {name}
      <Text as="span" fontWeight={300}>
        .{domain}
      </Text>
    </Text>
  );
};

export default Domain;
