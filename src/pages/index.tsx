import React, { useEffect } from 'react';
import { sleep } from '../helpers';
import Loading from '../components/Loading/Loading';
import { navigate } from 'gatsby';

const IndexPage: React.FC<never> = () => {
  const DURATION = 1200;
  useEffect(() => {
    sleep(DURATION).then(() => navigate('/home'));
  }, []);

  return <Loading duration={DURATION / 1000} />;
};

export default IndexPage;
