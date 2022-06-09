import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-fg-default);
`;

export function Redirect() {
  const { urlCode } = useParams();

  const getUrlCodeInfo = async () => {
    const response = await fetch(
      `https://short-url-webapp.herokuapp.com/shorten?url=${urlCode}`
    );

    const data = response.json();

    if (data.data) {
      const { longUrl } = data.data;
      location.replace(
        longUrl.startsWith('http') ? longUrl : `http://${longUrl}`
      );
    }
  };

  useEffect(() => {
    getUrlCodeInfo();
  }, []);

  return (
    <Wrapper>
      <Spinner />
      <Text>Redirecting</Text>
    </Wrapper>
  );
}
