import React from 'react';
import Text from '../base/Text';
import Link, { LinkProps } from '../base/Link';

export interface DomainProps extends Omit<LinkProps, 'to'> {
  url: string;
}

const Domain: React.FC<DomainProps> = ({ url, ...props }) => {
  const [name, domain] = url.split('.');
  return (
    <Link to="/home" fontWeight={600} {...props}>
      {name}
      <Text as="span" fontWeight={300}>
        .{domain}
      </Text>
    </Link>
  );
};

export default Domain;
