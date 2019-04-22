import React from 'react';
import Layout from '../components/Layout/Layout';
import Heading from '../components/base/Heading';
import Box from '../components/base/Box';
import { Text } from '../components/base/Text';
import '../main.css';

const Index: React.FC<never> = () => {
  return (
    <Layout alignItems="flex-start" justifyContent="center">
      <Heading fontWeight={600} fontSize={2} mb={2}>
        I'm Narendra.
      </Heading>
      <Box width="70%">
        <Text mb={1}>
          I’m a 3rd year Business and Computer Science student @ UBC.
        </Text>
        <Text>
          I specialize in building web-based applications and user interfaces.
        </Text>
      </Box>
    </Layout>
  );
};

export default Index;
