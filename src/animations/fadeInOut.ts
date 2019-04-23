import { css, keyframes } from 'styled-components';

export const initStyle = css`
  opacity: 0;
  transform: translateY(1rem);
`;

export const keyframe = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }

  30% {
    opacity: 1;
    transform: translateY(0);
  }

  70% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(1rem);
  }
`;
