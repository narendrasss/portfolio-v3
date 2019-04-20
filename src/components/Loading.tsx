import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const AnimatedBox = styled.div`
  width: 50%;
  height: 100%;
  background: black;
`;

const Center = styled.h1`
  position: absolute;
  color: white;
`;

const Loading: React.FC = () => (
  <Layout>
    <AnimatedBox />
    <AnimatedBox />
    <Center>hello!</Center>
  </Layout>
);

export default Loading;
