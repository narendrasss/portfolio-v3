import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '../base/Heading';
import Main from '../Main/Main';
import { initStyle, keyframe } from '../../animations/fade/fadeInOut';

export interface LoadingProps {
  duration?: number;
}

const Message = styled(Heading)<LoadingProps>`
  ${({ duration = 1.2 }) => css`
    ${initStyle}
    animation: ${keyframe} ${duration}s ease-in-out;
  `}
`;

const Loading: React.FC<LoadingProps> = ({ duration }) => (
  <Main alignItems="center" justifyContent="center">
    <Message duration={duration}>hello!</Message>
  </Main>
);

export default Loading;
