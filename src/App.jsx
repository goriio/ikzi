import { Container } from './components/Container';
import { ShortenerForm } from './components/ShortenerForm';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <ShortenerForm />
      </Container>
    </div>
  );
}

export default App;
