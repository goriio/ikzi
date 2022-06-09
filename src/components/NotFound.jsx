import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: var(--color-fg-default);
`;

const Text = styled.p`
  font-size: 1rem;
  color: var(--color-fg-wash);
`;

export function NotFound() {
  return (
    <div>
      <Title>Not Found</Title>
      <Text>
        Could not find what you were looking for. Shorten a url on{' '}
        <Link to="/">homepage</Link> instead.
      </Text>
    </div>
  );
}
