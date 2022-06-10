import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NotFound } from './NotFound';
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
  const [showNotFound, setShowNotFound] = useState(false);

  const getUrlCodeInfo = async () => {
    const response = await fetch(
      `https://short-url-webapp.herokuapp.com/info?code=${urlCode}`
    );

    const data = await response.json();

    if (data.data) {
      const { longUrl } = data.data;
      location.replace(
        longUrl.startsWith('http') ? longUrl : `http://${longUrl}`
      );
    } else {
      setShowNotFound(true);
    }
  };

  useEffect(() => {
    getUrlCodeInfo();
  }, []);

  if (showNotFound) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <Spinner />
      <Text>Redirecting</Text>
    </Wrapper>
  );
}
