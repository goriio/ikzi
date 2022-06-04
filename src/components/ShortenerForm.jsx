import styled from 'styled-components';
import { BiLink, BiCopy, BiCheck } from 'react-icons/bi';
import { useState } from 'react';
import { isUrl } from '../utils/validate';

const Form = styled.form`
  width: 100%;
  padding: 1.25rem;
  background: var(--color-fg-wash);
  border-radius: 1rem;
`;

const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary-default);
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-primary-default);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-fg-default);

  &:focus {
    outline: 1.5px solid var(--color-primary-default);
  }
`;

const InputIcon = styled.button`
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: 200ms ease;

  &:hover,
  &:active {
    border-radius: 50%;
    background: var(--color-fg-wash);
  }
`;

const Error = styled.small`
  padding-left: 1rem;
  font-size: 0.75rem;
  color: #dc3535;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: var(--color-primary-default);
  color: var(--color-fg-wash);
  border: none;
  border-radius: 0.5rem;
  transition: 200ms ease;

  &:hover {
    opacity: 90%;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortened, setShortened] = useState(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [error, setError] = useState(null);

  const getShortenedUrl = async (link) => {
    const response = await fetch(
      //`https://api.shrtco.de/v2/shorten?url=${link}`
      `https://short-url-webapp.herokuapp.com/shorten?url=${link}`
    );
    const data = await response.json();
    setShortened(data.shortUrl);
    
    /* if (data.ok) {
      setShortened(data.result.full_short_link);
    } else {
      alert('Something went wrong');
    } */
  };

  const makeAnother = () => {
    setUrl('');
    setShortened(null);
    setHasCopied(false);
    setError(null);
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!url) {
      return setError('Url is required.');
    }

    if (!isUrl(url)) {
      return setError('Url is invalid.');
    }
    getShortenedUrl(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortened);
    setHasCopied(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput>
        <LabelWrapper>
          <BiLink />
          <Label htmlFor="url">
            {shortened ? 'Shortened url' : 'Enter the link'}
          </Label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            id="url"
            type="text"
            placeholder="https://example.com"
            value={shortened ? shortened : url}
            onChange={handleChange}
          />
          {shortened && (
            <InputIcon onClick={copyToClipboard}>
              {hasCopied ? <BiCheck /> : <BiCopy />}
            </InputIcon>
          )}
        </InputWrapper>
        {error && <Error>{error}</Error>}
      </TextInput>
      {shortened ? (
        <>
          <Button onClick={makeAnother}>Make another</Button>
        </>
      ) : (
        <Button type="submit">Shorten</Button>
      )}
    </Form>
  );
}
