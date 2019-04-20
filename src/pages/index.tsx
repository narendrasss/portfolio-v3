import React from 'react';
import { useMetadata } from '../hooks';

const Index: React.FC = () => {
  const { name, tagline } = useMetadata();

  return (
    <div>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default Index;
