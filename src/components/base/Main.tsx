import styled from 'styled-components';
import {
  justifyContent,
  alignItems,
  JustifyContentProps,
  AlignItemsProps,
} from 'styled-system';

type MainProps = JustifyContentProps & AlignItemsProps;

const Main = styled.main<MainProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  ${justifyContent}
  ${alignItems}
`;

export default Main;
