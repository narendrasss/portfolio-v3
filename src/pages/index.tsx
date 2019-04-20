import React from 'react';
import Helmet from 'react-helmet';
import { useMetadata } from '../hooks';
import favicon from '../images/favicon.ico';

const Index: React.FC = () => {
  const { title, description, name, tagline } = useMetadata();

  return (
    <div>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default Index;
