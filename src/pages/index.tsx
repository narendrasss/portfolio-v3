import React from 'react';
import Layout from '../components/Layout';
import '../main.css';
import Box from '../components/base/Box';
import { Text } from '../components/base/Text';
import { Heading } from '../components/base/Heading';

const Index: React.FC = () => {
  return (
    <Layout alignItems="flex-start" justifyContent="center">
      <Heading mb={2}>I'm Narendra.</Heading>
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
