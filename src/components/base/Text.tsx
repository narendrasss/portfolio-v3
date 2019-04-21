import React from 'react';
import { Text as BaseText, TextProps } from 'rebass';

export const Text: React.FC<TextProps> = props => (
  <BaseText as="p" fontFamily="sans" fontSize={[0, 1]} {...props} />
);

export const Mono: React.FC<TextProps> = props => (
  <BaseText as="p" fontFamily="mono" fontSize={[0, 1]} {...props} />
);
