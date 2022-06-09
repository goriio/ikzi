import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './components/Container';
import { ShortenerForm } from './components/ShortenerForm';
import { Redirect } from './components/Redirect';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route exact path="/" element={<ShortenerForm />} />
          <Route path="/:urlCode" element={<Redirect />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
