import React from 'react';
import { Heading, Text, Box } from 'rebass';
import Layout from '../components/Layout';
import '../main.css';

const Index: React.FC = () => {
  return (
    <Layout alignItems="flex-start" justifyContent="center">
      <Heading fontSize="8rem" mb="4rem" lineHeight="title">
        I'm Narendra.
      </Heading>
      <Box width="70%">
        <Text fontSize="2.5rem" mb="3rem">
          I’m a 3rd year Business and Computer Science student @ UBC.
        </Text>
        <Text fontSize="2.5rem">
          I specialize in building web-based applications and user interfaces.
        </Text>
      </Box>
    </Layout>
  );
};

export default Index;
