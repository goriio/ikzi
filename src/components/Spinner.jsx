import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 4px solid var(--color-fg-default);
  border-top-color: var(--color-primary-default);
  border-radius: 50%;
  animation: ${spin} 500ms linear infinite;
`;
