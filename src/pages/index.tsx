import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Heading from '../components/base/Heading';
import Box from '../components/base/Box';
import Text from '../components/base/Text';
import { sleep } from '../helpers';
import Loading from '../components/Loading/Loading';
import { initStyle, keyframe } from '../animations/fadeIn';

const animated = css`
  ${initStyle}
  animation: ${keyframe} 0.5s ease-out;
  animation-fill-mode: forwards;
`;

const Title = styled(Heading)`
  ${animated}
`;

const ParOne = styled(Text)`
  ${animated}
  animation-delay: 0.2s;
`;

const ParTwo = styled(Text)`
  ${animated}
  animation-delay: 0.4s;
`;

const Index: React.FC<never> = () => {
  const duration = 1200;

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    sleep(duration).then(() => setLoading(false));
  }, []);

  if (isLoading) return <Loading duration={duration / 1000} />;

  return (
    <Layout alignItems="flex-start" justifyContent="center">
      <Title fontWeight={600} fontSize={2} mb={2}>
        I'm Narendra.
      </Title>
      <Box width="70%">
        <ParOne mb={1}>
          I’m a 3rd year Business and Computer Science student @ UBC.
        </ParOne>
        <ParTwo>
          I specialize in building web-based applications and user interfaces.
        </ParTwo>
      </Box>
    </Layout>
  );
};

export default Index;
